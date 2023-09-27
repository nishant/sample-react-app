"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"
import './styles/profile-selector.scss';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "../ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../ui/popover"
import { cn } from '../../lib/utils';
import { Button } from "../ui/button"
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

const profiles = [
  {
    value: "nishant arora",
    label: "Nishant Arora",
  },
  {
    value: "nathan wang",
    label: "Nathan Wang",
  },
  {
    value: "fraiser crane",
    label: "Fraiser Crane",
  }
];

const ProfileSelector = () => {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
  
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[100%] justify-between no-border"
        >
          <Avatar className="w-[32px] h-[32px]">
            <AvatarImage className="profile-icon" src="https://static.thenounproject.com/png/638636-200.png" />
            <AvatarFallback>Profile</AvatarFallback>
          </Avatar>
          {
            value
            ? profiles.find((framework) => framework.value === value)?.label
            : profiles[0].label
          }
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search profiles..." />
          <CommandEmpty>No profile found.</CommandEmpty>
          <CommandGroup>
            {profiles.map((framework) => (
              <CommandItem
                key={framework.value}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? "" : currentValue)
                  setOpen(false)
                }}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    value === framework.value ? "opacity-100" : "opacity-0"
                  )}
                />
                {framework.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  )
};

export default ProfileSelector;
