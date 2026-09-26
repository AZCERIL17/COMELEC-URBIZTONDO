import { Facebook, ExternalLink, ThumbsUp, MessageSquare, Share2, ShieldCheck, CheckCircle } from "lucide-react";
import { ComelecLogo } from "./ComelecLogo";

export function FacebookFeedSection() {
  const facebookUrl = "https://www.facebook.com/ComelecUrbiztondoPangasinan1/";

  const facebookPosts = [
    {
      id: "fb-1",
      date: "September 2026",
      text: "PAUNAWA SA MGA KABABAYAN SA URBIZTONDO: Ang pagsusumite ng Certificate of Candidacy (COC) para sa darating na Barangay at Sangguniang Kabataan Elections (BSKE 2026) ay magsisimula sa Setyembre 28 hanggang Oktubre 5, 2026 mula 8:00 AM hanggang 5:00 PM sa ating Comelec Office sa Municipal Hall.",
      likes: "142",
      shares: "89",
    },
    {
      id: "fb-2",
      date: "August 2026",
      text: "Paalala sa mga kabataang mag-aaral at first-time SK voters (edad 15 hanggang 30 taong gulang): Magdala lamang ng PSA Birth Certificate o School ID para sa inyong rehistrasyon. Huwag palampasin ang pagkakataong makilahok sa pagpili ng inyong lider sa barangay!",
      likes: "98",
      shares: "45",
    },
  ];

  return (
    <section className="py-12 bg-white border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner Card */}
        <div className="bg-gradient-to-br from-[#1877F2]/10 via-sky-50 to-blue-50/50 rounded-3xl p-6 sm:p-8 border border-blue-200 shadow-xs">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-[#1877F2] text-white flex items-center justify-center shrink-0 shadow-md">
                <Facebook className="w-8 h-8 fill-current" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    Official Facebook Page
                  </h3>
                  <CheckCircle className="w-4 h-4 text-[#1877F2]" />
                </div>
                <p className="text-xs sm:text-sm text-slate-600 font-medium">
                  Stay updated with daily announcements, satellite registration schedules, and live voter education
                </p>
                <a
                  href={facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-[#1877F2] hover:underline"
                >
                  @ComelecUrbiztondoPangasinan1
                </a>
              </div>
            </div>

            <a
              href={facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 bg-[#1877F2] hover:bg-[#166fe5] text-white text-xs sm:text-sm font-bold rounded-xl shadow-sm hover:shadow transition-all inline-flex items-center gap-2 cursor-pointer whitespace-nowrap self-stretch md:self-auto justify-center"
            >
              <Facebook className="w-4 h-4 fill-current" />
              Visit & Follow on Facebook
              <ExternalLink className="w-3.5 h-3.5 opacity-80" />
            </a>
          </div>

          {/* Recent Post Highlights from page */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {facebookPosts.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-2xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-2.5">
                    <span className="font-semibold text-slate-700">COMELEC Urbiztondo Pangasinan</span>
                    <span>{post.date}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    {post.text}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1">
                      <ThumbsUp className="w-3 h-3 text-[#1877F2]" />
                      {post.likes}
                    </span>
                    <span className="flex items-center gap-1">
                      <Share2 className="w-3 h-3" />
                      {post.shares}
                    </span>
                  </div>
                  <a
                    href={facebookUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-[#1877F2] hover:underline flex items-center gap-1"
                  >
                    View Post <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
