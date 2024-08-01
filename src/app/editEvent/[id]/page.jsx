import React from "react";
import styles from "../../style";
import EditEventForm from "../../../components/EditEventForm";

const getEventById = async (id) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/event/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch");
    }

    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
    return null;
  }
};

const page = async ({ params }) => {
  const { id } = params;
  const data = await getEventById(id);

  if (!data || !data.event) {
    return <div>Error loading event.</div>;
  }
  const {
    title,
    description,
    location: { venue, city, state, country },
    date: { year, month, day },
    time,
    link,
    price,
    reward,
    organizer,
    industry,
  } = data.event;
  console.log(data.event);

  return (
    <div
      className={`bg-light-secondary rounded-[18px] ${styles.padding} flex flex-row items-start lg:justify-start relative gap-[16px] overflow-hidden h-auto ${styles.margin} w-auto mt-[16px]`}
    >
      <EditEventForm
        id={id}
        title={title}
        description={description}
        venue={venue}
        city={city}
        state={state}
        country={country}
        year={year}
        month={month}
        day={day}
        time={time}
        link={link}
        price={price}
        reward={reward}
        organizer={organizer}
        industry={industry}
      />
    </div>
  );
};

export default page;
