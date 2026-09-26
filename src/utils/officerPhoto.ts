import { useState, useEffect } from "react";
import { IMAGES } from "../data/assets";

const OFFICER_STORAGE_KEY = "comelec_officer_photo_custom";
const ASSISTANT_STORAGE_KEY = "comelec_assistant_photo_custom";

export function useOfficerPhoto() {
  const [photo, setPhoto] = useState<string>(() => {
    try {
      return localStorage.getItem(OFFICER_STORAGE_KEY) || IMAGES.officerEric;
    } catch {
      return IMAGES.officerEric;
    }
  });

  useEffect(() => {
    const handleUpdate = () => {
      try {
        const custom = localStorage.getItem(OFFICER_STORAGE_KEY);
        setPhoto(custom || IMAGES.officerEric);
      } catch {
        setPhoto(IMAGES.officerEric);
      }
    };

    window.addEventListener("comelec_officer_photo_updated", handleUpdate);
    return () => window.removeEventListener("comelec_officer_photo_updated", handleUpdate);
  }, []);

  const updatePhoto = (dataUrl: string) => {
    try {
      localStorage.setItem(OFFICER_STORAGE_KEY, dataUrl);
      setPhoto(dataUrl);
      window.dispatchEvent(new Event("comelec_officer_photo_updated"));
    } catch (e) {
      console.error("Failed to save officer photo to localStorage", e);
    }
  };

  const resetPhoto = () => {
    try {
      localStorage.removeItem(OFFICER_STORAGE_KEY);
      setPhoto(IMAGES.officerEric);
      window.dispatchEvent(new Event("comelec_officer_photo_updated"));
    } catch (e) {
      console.error("Failed to remove officer photo", e);
    }
  };

  return { photo, updatePhoto, resetPhoto, isCustom: photo !== IMAGES.officerEric };
}

export function useAssistantPhoto() {
  const [photo, setPhoto] = useState<string>(() => {
    try {
      return localStorage.getItem(ASSISTANT_STORAGE_KEY) || IMAGES.assistantJocelyn;
    } catch {
      return IMAGES.assistantJocelyn;
    }
  });

  useEffect(() => {
    const handleUpdate = () => {
      try {
        const custom = localStorage.getItem(ASSISTANT_STORAGE_KEY);
        setPhoto(custom || IMAGES.assistantJocelyn);
      } catch {
        setPhoto(IMAGES.assistantJocelyn);
      }
    };

    window.addEventListener("comelec_assistant_photo_updated", handleUpdate);
    return () => window.removeEventListener("comelec_assistant_photo_updated", handleUpdate);
  }, []);

  const updatePhoto = (dataUrl: string) => {
    try {
      localStorage.setItem(ASSISTANT_STORAGE_KEY, dataUrl);
      setPhoto(dataUrl);
      window.dispatchEvent(new Event("comelec_assistant_photo_updated"));
    } catch (e) {
      console.error("Failed to save assistant photo to localStorage", e);
    }
  };

  const resetPhoto = () => {
    try {
      localStorage.removeItem(ASSISTANT_STORAGE_KEY);
      setPhoto(IMAGES.assistantJocelyn);
      window.dispatchEvent(new Event("comelec_assistant_photo_updated"));
    } catch (e) {
      console.error("Failed to remove assistant photo", e);
    }
  };

  return { photo, updatePhoto, resetPhoto, isCustom: photo !== IMAGES.assistantJocelyn };
}

export function useOfficialsPhotos() {
  const officer = useOfficerPhoto();
  const assistant = useAssistantPhoto();

  return {
    officerPhoto: officer.photo,
    updateOfficerPhoto: officer.updatePhoto,
    resetOfficerPhoto: officer.resetPhoto,
    isOfficerCustom: officer.isCustom,

    assistantPhoto: assistant.photo,
    updateAssistantPhoto: assistant.updatePhoto,
    resetAssistantPhoto: assistant.resetPhoto,
    isAssistantCustom: assistant.isCustom,
  };
}
