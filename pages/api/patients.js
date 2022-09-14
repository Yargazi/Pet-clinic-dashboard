export default async function handler(req, res) {
  if (req.method === "POST") {
    return await create(req, res);
  }
  if (req.method === "GET") {
    return await read(req, res);
  }
  if (req.method === "DELETE") {
    return await del(req, res);
  }
}

const create = async (req, res) => {
  // insert to database
  const patient = { name: "Alice" };
  const patients = [patient];
  res.status(200).json({ patients });
};
export const read = async (req, res) => {
  // load from database
  const patients = [
    {
      name: "Alice",
      phone: "0547125822",
      petName: "falafel",
      age: "8",
      petType: "dog",
      // icon: <PencilIconcomponent />,
    },
    {
      name: "Костя",
      phone: "0547125833",
      petName: "Блинчик",
      age: "1",
      petType: "еда",
      // icon: <PencilIconcomponent />,
    },
    {
      name: "Саша",
      phone: "0547125844",
      petName: "Брюс",
      age: "10",
      petType: "dog",
      // icon: <PencilIconcomponent />,
    },
    {
      name: "Катя",
      phone: "0547125811",
      petName: "Рекс",
      age: "8",
      petType: "dog",
      // icon: <PencilIconcomponent />,
    },
  ];
  res.status(200).json({ patients });
};

const del = async (req, res) => {
  // delete from database
};
