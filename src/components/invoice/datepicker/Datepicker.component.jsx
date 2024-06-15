import React from "react";
import { DatePicker } from "@nextui-org/react";
import { now, getLocalTimeZone } from "@internationalized/date";

export default function DatepickerComponent() {
  return (
    <div className="flex w-full max-w-xl flex-row gap-4">
      <DatePicker
        label="issue date"
        variant="underlined"
        size="sm"
        hideTimeZone
        showMonthAndYearPickers
        defaultValue={now(getLocalTimeZone())}
      />
    </div>
  );
}
