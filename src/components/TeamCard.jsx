import React from "react";
import Team_cards from "../components/Team_cards";

function TeamCard() {
  return (
    <div className="flex justify-center">
      <div className="flex flex-wrap w-[80vw]  gap-16 justify-center">
        <Team_cards
          info={{
            img: "https://www.benow.in/assets/images/team/hemant.jpeg",
            name: "HEMANT TAWARE",
            designation: "Chief Growth Officer",
          }}
        />
        <Team_cards
          info={{
            img: "https://www.benow.in/assets/images/team/4.jpg",
            name: "ANSHUMAN MEHTA",
            designation: "Head - Brand Alliance and Business Development",
          }}
        />
        <Team_cards
          info={{
            img: "https://www.benow.in/assets/images/team/5.jpg",
            name: " AMIT SINGH",
            designation: " Head - Banking Alliance and Business Development",
          }}
          Chief
        />
        <Team_cards
          info={{
            img: "https://www.benow.in/assets/images/team/10.jpg",
            name: "MUNNALAL YADAV",
            designation: "Head - Sales & Merchant Engagement - Mobile",
          }}
        />
        <Team_cards
          info={{
            img: "https://www.benow.in/assets/images/team/subin.jpeg",
            name: "SUBIN PHILIP",
            designation: "Head - Sales & Merchant Engagement - CDIT",
          }}
        />
        <Team_cards
          info={{
            img: "https://www.benow.in/img/team/12.jpg",
            name: "RAMANAND KULKARNI",
            designation: "Head - Inside Sales and Engagement",
          }}
        />
        <Team_cards
          info={{
            img: "https://www.benow.in/assets/images/team/8.jpg",
            name: "NAMAN JAIN",
            designation: "Head - Business Operation",
          }}
        />
        <Team_cards
          info={{
            img: "https://www.benow.in/assets/images/team/9.jpg",
            name: "FORUM RAJANI",
            designation: "Head - Human Resource",
          }}
        />
        <Team_cards
          info={{
            img: "https://www.benow.in/assets/images/team/7.jpg",
            name: "SANJAY SINGH",
            designation: "Head - Technology",
          }}
        />
        <Team_cards
          info={{
            img: "https://www.benow.in/img/team/1.jpg",
            name: "CHINTAN GALA",
            designation: "Head - Finance",
          }}
        />
      </div>
    </div>
  );
}

export default TeamCard;
