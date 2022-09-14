import { Spinner } from "flowbite-react";

export function Loader() {
  return (
    <div className="text-center">
      <Spinner aria-label="Center-aligned spinner example" />
    </div>
  );
}
