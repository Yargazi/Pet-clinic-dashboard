import { PetClinicDashboard } from "@/components/pet-clinic-dashboard";
import { useQuery } from "@tanstack/react-query";
import { Loader } from "@/components/Loader";

const Home = ({ patients }) => {
  const { isLoading, error, data } = useQuery(["patientsRepo"], () =>
    fetch(`/api/patients`).then((res) => res.json())
  );

  if (isLoading) {
    return <Loader />;
  }

  return <PetClinicDashboard patients={data ? data.patients : []} />;
};

export default Home;
