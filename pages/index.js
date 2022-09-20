import { PetClinicDashboard } from "@/components/pet-clinic-dashboard";
import { useQuery, useMutation } from "@tanstack/react-query";
import { Loader } from "@/components/Loader";

const Home = () => {
  const { isLoading, error, data } = useQuery(["patientsRepo"], () =>
    fetch(`/api/patients`).then((res) => res.json())
  );

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <PetClinicDashboard users={data ? data.users : []} />
      )}
      ;
    </>
  );
};

export default Home;
