import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

export default function VisitCounter({ text }) {
  const [visits, setVisits] = useState(0);

  useEffect(() => {
    const handleVisit = async () => {
      const alreadyVisited = sessionStorage.getItem("visited");

      if (!alreadyVisited) {
        await supabase.rpc("increment_visits");
        sessionStorage.setItem("visited", "true");
      }

      const { data, error } = await supabase
        .from("visits")
        .select("count")
        .eq("id", 1)
        .single();

      if (error) {
        console.error(error);
        return;
      }

      setVisits(data.count);
    };

    handleVisit();
  }, []);

  return <p className="font-semibold text-xl">{text}: <span className="font-bold">{visits}</span></p>;
}