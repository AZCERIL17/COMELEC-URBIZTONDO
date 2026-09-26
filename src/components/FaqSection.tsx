import { useState, useMemo } from "react";
import { Search, ChevronDown, ChevronUp, HelpCircle, X } from "lucide-react";
import { FAQ_DATA, FaqItem } from "../data/faq";

export function FaqSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("ALL");
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({
    "coc-1": true, // default first one open for discovery
  });

  const categories = [
    "ALL",
    "FILING OF COC",
    "REACTIVATION",
    "VOTER ID",
    "VOTER REGISTRATION",
    "UPDATING OF VOTER RECORDS",
  ];

  const toggleItem = (id: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const filteredFaqs = useMemo(() => {
    return FAQ_DATA.filter((item) => {
      const matchesCategory = activeCategory === "ALL" || item.category === activeCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        item.question.toLowerCase().includes(q) ||
        item.answer.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, activeCategory]);

  // Group by category to match Screenshot_4 layout
  const groupedFaqs = useMemo(() => {
    const groups: { [key: string]: FaqItem[] } = {};
    filteredFaqs.forEach((item) => {
      if (!groups[item.category]) {
        groups[item.category] = [];
      }
      groups[item.category].push(item);
    });
    return groups;
  }, [filteredFaqs]);

  return (
    <section id="faq" className="py-14 bg-white border-b border-slate-200/70 scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header (Matches Screenshot_4) */}
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 font-medium mt-2 max-w-xl mx-auto">
            Search across filing of COC, reactivation, voter ID, registration, and updating of voter records.
          </p>
        </div>

        {/* Search Input (Matches Screenshot_4) */}
        <div className="relative mb-6">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
            <Search className="w-5 h-5" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search questions, e.g. &quot;reactivation&quot; or &quot;COC&quot;"
            className="w-full pl-11 pr-10 py-3.5 bg-slate-50 hover:bg-slate-100/80 focus:bg-white text-sm text-slate-900 placeholder:text-slate-400 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Category Filter Chips */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-3 mb-8 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg whitespace-nowrap transition-colors cursor-pointer ${
                activeCategory === cat
                  ? "bg-[#0b3b60] text-white shadow-xs"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {cat === "ALL" ? "All Categories" : cat}
            </button>
          ))}
        </div>

        {/* Grouped Accordions (Matches Screenshot_4) */}
        {Object.keys(groupedFaqs).length === 0 ? (
          <div className="text-center py-12 bg-slate-50 rounded-2xl border border-dashed border-slate-200">
            <HelpCircle className="w-8 h-8 text-slate-400 mx-auto mb-2" />
            <p className="text-sm font-semibold text-slate-700">No questions matched your query.</p>
            <p className="text-xs text-slate-500 mt-1">
              Try searching with broader terms or clear your search filter.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setActiveCategory("ALL");
              }}
              className="mt-3 px-3 py-1.5 text-xs font-bold text-sky-600 hover:underline"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="space-y-8">
            {Object.entries(groupedFaqs).map(([categoryName, items]) => (
              <div key={categoryName} className="space-y-3">
                {/* Category Header (Matches Screenshot_4) */}
                <h3 className="text-xs font-extrabold tracking-wider text-sky-700 uppercase">
                  {categoryName}
                </h3>

                {/* Items in this category */}
                <div className="bg-white rounded-xl border border-slate-200/90 divide-y divide-slate-100 shadow-2xs overflow-hidden">
                  {items.map((item) => {
                    const isOpen = !!openItems[item.id];
                    return (
                      <div key={item.id} className="transition-colors">
                        <button
                          onClick={() => toggleItem(item.id)}
                          className="w-full text-left py-4 px-5 flex items-center justify-between gap-4 hover:bg-slate-50/70 transition-colors cursor-pointer"
                          aria-expanded={isOpen}
                        >
                          <span className="text-sm font-semibold text-slate-800">
                            {item.question}
                          </span>
                          <span className="text-sky-600 shrink-0">
                            {isOpen ? (
                              <ChevronUp className="w-4 h-4" />
                            ) : (
                              <ChevronDown className="w-4 h-4" />
                            )}
                          </span>
                        </button>

                        {isOpen && (
                          <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed bg-slate-50/40 border-t border-slate-50">
                            <p>{item.answer}</p>
                            {item.legalNote && (
                              <div className="mt-2 text-[11px] text-slate-400 italic">
                                Reference: {item.legalNote}
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
