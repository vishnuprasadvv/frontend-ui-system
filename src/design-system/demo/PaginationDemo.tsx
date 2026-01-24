import React from "react";
import { Pagination } from "@/design-system/components/Pagination/Pagination";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const PaginationDemo = () => {
  const [page, setPage] = React.useState(1);

  const totalPages = 18;

  return (
    <Card className="max-w-xl mx-auto">
      <CardHeader>
        <CardTitle>Pagination Demo</CardTitle>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Fake page content */}
        <div className="rounded-lg border p-4 bg-muted/30">
          <p className="text-sm text-muted-foreground">
            Currently on page:
          </p>

          <p className="text-2xl font-bold">{page}</p>
        </div>

        {/* Pagination */}
        <Pagination
          page={page}
          totalPages={totalPages}
          onPageChange={setPage}
          size="md"
        />
      </CardContent>
    </Card>
  );
};
