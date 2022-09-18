import { Spinner } from "flowbite-react";

export function Loader() {
  return (
    <div className="text-center mt-10">
      <Spinner aria-label="Center-aligned spinner example" />
    </div>
  );
}
