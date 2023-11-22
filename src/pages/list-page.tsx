import React, { MouseEvent } from "react";
import { Card } from "../components/card";
import { useNavigate } from "react-router-dom";
import { useUserStore } from "../user.store";

export const ListPage = () => {
  const navigate = useNavigate();

  const users = useUserStore((state) => state.users);

  const onContainerClicked = (e: MouseEvent<HTMLDivElement>) => {
    const clickedUserId = (e.target as HTMLElement).getAttribute("data-userid");
    if (clickedUserId) {
      navigate(`/detail/${clickedUserId}`);
    }
  };

  return (
    <div className="space-y-5" onClick={onContainerClicked}>
      {users.map((user) => {
        return (
          <Card
            key={user.id}
            containerClassName="cursor-pointer"
            id={user.id}
            subtext={user.subtext}
            avatar={user.avatar}
            name={user.name}
          />
        );
      })}
    </div>
  );
};
