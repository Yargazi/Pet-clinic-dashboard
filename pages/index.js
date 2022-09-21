import { useEffect } from "react";
import { PetClinicDashboard } from "../components/pet-clinic-dashboard";
import { useQuery } from "@tanstack/react-query";
import { Loader } from "../components/Loader";
import { useAppContext } from "../context/Context";

const Home = () => {
  const { setPatients } = useAppContext();

  const { isLoading, data } = useQuery(["patientsRepo"], () =>
    fetch(`/api/patients`).then((res) => res.json())
  );

  useEffect(() => {
    if (data) {
      setPatients(data.users);
    }
  }, [data]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <PetClinicDashboard users={data ? data.users : []} />
      )}
    </>
  );
};

export default Home;
