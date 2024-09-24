import { Buttons as Button } from "@/components/ui/Button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/utils/clsx";
import { useVirtualizer } from "@tanstack/react-virtual";
import { Check, ChevronsUpDown } from "lucide-react";
import * as React from "react";

type Option = {
  value: string;
  label: string;
};

interface VirtualizedCommandProps {
  height: string;
  options: Option[];
  placeholder: string;
  selectedOption: string;
  onSelectOption?: (option: string) => void;
}

const VirtualizedCommand = ({
  height,
  options,
  placeholder,
  selectedOption,
  onSelectOption,
}: VirtualizedCommandProps) => {
  const [filteredOptions, setFilteredOptions] =
    React.useState<Option[]>(options);
  const parentRef = React.useRef(null);

  React.useEffect(() => {
    setFilteredOptions(options);
  }, [options]);

  const virtualizer = useVirtualizer({
    count: filteredOptions.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 35,
    overscan: 5,
  });

  const virtualOptions = virtualizer.getVirtualItems();

  const handleSearch = (search: string) => {
    setFilteredOptions(
      options.filter((option) =>
        option.value.toLowerCase().includes(search.toLowerCase() ?? [])
      )
    );
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      event.preventDefault();
    }
  };

  return (
    <Command shouldFilter={false} onKeyDown={handleKeyDown}>
      <CommandInput onValueChange={handleSearch} placeholder={placeholder} />
      <CommandList
        style={{
          height: height,
          width: "100%",
          overflow: "auto",
          position: "relative",
        }}
        ref={parentRef}
      >
        <CommandEmpty>No item found.</CommandEmpty>
        <CommandGroup>
          <div
            style={{
              height: `${virtualizer.getTotalSize()}px`,
              width: "100%",
              position: "relative",
            }}
          >
            {virtualOptions.map((virtualOption) => {
              return (
                <CommandItem
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: `${virtualOption.size}px`,
                    transform: `translateY(${virtualOption.start}px)`,
                  }}
                  key={filteredOptions[virtualOption.index].value}
                  value={filteredOptions[virtualOption.index].value}
                  onSelect={onSelectOption}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      selectedOption ===
                        filteredOptions[virtualOption.index].value
                        ? "opacity-100"
                        : "opacity-0"
                    )}
                  />
                  {filteredOptions[virtualOption.index].label}
                </CommandItem>
              );
            })}
          </div>
        </CommandGroup>
      </CommandList>
    </Command>
  );
};

interface VirtualizedComboboxProps {
  options: { value: string; label: string }[];
  searchPlaceholder?: string;
  width?: string;
  height?: string;
  onSelectOption?: ({ value, label }: { value: string; label: string }) => void;
}

export function VirtualizedCombobox({
  options,
  searchPlaceholder = "Search items...",
  width = "400px",
  height = "400px",
  onSelectOption,
}: VirtualizedComboboxProps) {
  const [open, setOpen] = React.useState<boolean>(false);
  const [selectedOption, setSelectedOption] = React.useState<string>("");

  const handleSelectOption = (value: string) => {
    const selectedValue = value === selectedOption ? "" : value;
    setSelectedOption(selectedValue);
    setOpen(false);
    const label = options.find((option) => option.value === value)?.label!;
    if (selectedValue === "") {
      return;
    } else {
      onSelectOption?.({ value, label });
    }
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="justify-between"
          style={{
            width: width,
          }}
        >
          {selectedOption
            ? options.find((option) => option.value === selectedOption)?.label
            : searchPlaceholder}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-0" style={{ width: width }}>
        <VirtualizedCommand
          height={height}
          options={options}
          placeholder={searchPlaceholder}
          selectedOption={selectedOption}
          onSelectOption={handleSelectOption}
        />
      </PopoverContent>
    </Popover>
  );
}
