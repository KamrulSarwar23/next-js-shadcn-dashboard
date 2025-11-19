"use client";

import React, { useState } from "react";
import { ScrollArea } from "./ui/scroll-area";
import { Card } from "./ui/card";
import { Checkbox } from "./ui/checkbox";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "./ui/button";
import { Calendar1Icon } from "lucide-react";
import { format } from "date-fns";

const TodoList = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [open, setOpen] = useState(false);
  return (
    <div className="">
      <h1 className="text-lg font-medium mb-6">Todo List</h1>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button className="w-full cursor-pointer" variant="default">
            <Calendar1Icon />
            {date ? format(date, "PPP") : <span>Pick a date</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="p-0 w-full">
          <Calendar
            mode="single"
            selected={date}
            onSelect={(date) => {
              setDate(date);
              setOpen(false);
            }}
          />
        </PopoverContent>
      </Popover>
      {/* List */}
      <ScrollArea className="max-h-[400px] mt-4 overflow-y-auto">
        {/* List Item */}

        <div className="flex flex-col gap-2">
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="item1" checked className="cursor-pointer" />
              <label className="text-sm text-muted-foreground" htmlFor="item1">
                Lorem ipsum dolor sit amet.
              </label>
            </div>
          </Card>

          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="item1" checked className="cursor-pointer" />
              <label className="text-sm text-muted-foreground" htmlFor="item1">
                Lorem ipsum dolor sit amet.
              </label>
            </div>
          </Card>

          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="item1" className="cursor-pointer" />
              <label className="text-sm text-muted-foreground" htmlFor="item1">
                Lorem ipsum dolor sit amet.
              </label>
            </div>
          </Card>

          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="item1" checked className="cursor-pointer" />
              <label className="text-sm text-muted-foreground" htmlFor="item1">
                Lorem ipsum dolor sit amet.
              </label>
            </div>
          </Card>

          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="item1" checked className="cursor-pointer" />
              <label className="text-sm text-muted-foreground" htmlFor="item1">
                Lorem ipsum dolor sit amet.
              </label>
            </div>
          </Card>

          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="item1" className="cursor-pointer" />
              <label className="text-sm text-muted-foreground" htmlFor="item1">
                Lorem ipsum dolor sit amet.
              </label>
            </div>
          </Card>

          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="item1" checked className="cursor-pointer" />
              <label className="text-sm text-muted-foreground" htmlFor="item1">
                Lorem ipsum dolor sit amet.
              </label>
            </div>
          </Card>

          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="item1" className="cursor-pointer" />
              <label className="text-sm text-muted-foreground" htmlFor="item1">
                Lorem ipsum dolor sit amet.
              </label>
            </div>
          </Card>

          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="item1" checked className="cursor-pointer" />
              <label className="text-sm text-muted-foreground" htmlFor="item1">
                Lorem ipsum dolor sit amet.
              </label>
            </div>
          </Card>

          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="item1" checked className="cursor-pointer" />
              <label className="text-sm text-muted-foreground" htmlFor="item1">
                Lorem ipsum dolor sit amet.
              </label>
            </div>
          </Card>
        </div>
      </ScrollArea>
    </div>
  );
};

export default TodoList;
