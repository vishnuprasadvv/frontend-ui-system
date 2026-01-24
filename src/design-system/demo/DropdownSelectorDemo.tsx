import { useState } from "react";
import {
  DropdownSelector,
  type Option,
} from "@/design-system/components/DropdownSelector";
import { Card } from "@/components/ui/card";

const OPTIONS: Option[] = [
  { label: "Savings Account", value: "savings" },
  { label: "Current Account", value: "current" },
  { label: "Fixed Deposit", value: "fd" },
  { label: "Loan Account", value: "loan" },
];

export default function DropdownSelectorDemo() {
  const [accountType, setAccountType] = useState("");

  return (
    <div className="w-full flex items-center justify-center p-4">
      <Card className="space-y-6 rounded-xl bg-card p-8 shadow-md w-max">
        <h1 className="text-xl font-semibold">Select Account Type</h1>

        <DropdownSelector
          value={accountType}
          onChange={setAccountType}
          options={OPTIONS}
          placeholder="Choose account"
        />

        {accountType && (
          <p className="text-sm text-muted-foreground">
            Selected value:{" "}
            <span className="font-medium text-black">{accountType}</span>
          </p>
        )}
      </Card>
    </div>
  );
}
