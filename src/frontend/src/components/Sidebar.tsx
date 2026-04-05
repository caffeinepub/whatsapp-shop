import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

interface SidebarProps {
  categories: string[];
  selectedCategories: string[];
  onCategoryChange: (cat: string, checked: boolean) => void;
  priceRange: [number, number];
  onPriceRangeChange: (range: [number, number]) => void;
  sortOrder: string;
  onSortChange: (s: string) => void;
}

export default function Sidebar({
  categories,
  selectedCategories,
  onCategoryChange,
  priceRange,
  onPriceRangeChange,
  sortOrder,
  onSortChange,
}: SidebarProps) {
  return (
    <div className="space-y-6">
      {/* Categories */}
      <div className="bg-white border border-border rounded-xl p-5 shadow-xs">
        <h3 className="font-semibold text-sm text-foreground mb-4 uppercase tracking-wide">
          Categories
        </h3>
        <div className="space-y-3">
          {categories.map((cat) => (
            <div key={cat} className="flex items-center gap-2">
              <Checkbox
                id={cat}
                checked={selectedCategories.includes(cat)}
                onCheckedChange={(v) => onCategoryChange(cat, !!v)}
                className="data-[state=checked]:bg-brand data-[state=checked]:border-brand"
                data-ocid="sidebar.checkbox"
              />
              <Label
                htmlFor={cat}
                className="text-sm cursor-pointer text-muted-foreground hover:text-foreground"
              >
                {cat}
              </Label>
            </div>
          ))}
        </div>
      </div>

      {/* Price range */}
      <div className="bg-white border border-border rounded-xl p-5 shadow-xs">
        <h3 className="font-semibold text-sm text-foreground mb-4 uppercase tracking-wide">
          Price Range
        </h3>
        <Slider
          min={0}
          max={100}
          step={1}
          value={[priceRange[0], priceRange[1]]}
          onValueChange={(v) => onPriceRangeChange([v[0], v[1]])}
          className="mb-3"
          data-ocid="sidebar.toggle"
        />
        <div className="flex justify-between text-sm text-muted-foreground">
          <span>${priceRange[0]}</span>
          <span>${priceRange[1]}</span>
        </div>
        <div className="flex gap-2 mt-3">
          <input
            type="number"
            min={0}
            max={priceRange[1]}
            value={priceRange[0]}
            onChange={(e) =>
              onPriceRangeChange([Number(e.target.value), priceRange[1]])
            }
            className="w-full border border-border rounded-md text-sm px-2 py-1.5 text-center focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand"
            data-ocid="sidebar.input"
          />
          <span className="text-muted-foreground flex items-center text-sm">
            —
          </span>
          <input
            type="number"
            min={priceRange[0]}
            max={100}
            value={priceRange[1]}
            onChange={(e) =>
              onPriceRangeChange([priceRange[0], Number(e.target.value)])
            }
            className="w-full border border-border rounded-md text-sm px-2 py-1.5 text-center focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand"
            data-ocid="sidebar.input"
          />
        </div>
      </div>

      {/* Sort */}
      <div className="bg-white border border-border rounded-xl p-5 shadow-xs">
        <h3 className="font-semibold text-sm text-foreground mb-4 uppercase tracking-wide">
          Sort By
        </h3>
        <div className="space-y-2">
          {[
            { value: "default", label: "Default" },
            { value: "price-asc", label: "Price: Low to High" },
            { value: "price-desc", label: "Price: High to Low" },
            { value: "rating", label: "Top Rated" },
          ].map((opt) => (
            <label
              key={opt.value}
              className="flex items-center gap-2 cursor-pointer"
            >
              <input
                type="radio"
                name="sort"
                value={opt.value}
                checked={sortOrder === opt.value}
                onChange={() => onSortChange(opt.value)}
                className="accent-brand"
                data-ocid="sidebar.radio"
              />
              <span className="text-sm text-muted-foreground hover:text-foreground">
                {opt.label}
              </span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}
