import React from "react"
import data from "../../data/team.json"
import Pagetitle from "../Shared/Pagetitle"
import { AnimationOnScroll } from "react-animation-on-scroll"
import TeamItem from "./TeamItem"

const Team = () => {
  return (
    <section
      className="team-section align-items-center justify-content-center"
      id="team"
    >
      <div className="container">
        <AnimationOnScroll
          animateIn="animate__fadeInUp"
          animateOut="animate__fadeInOut"
          animateOnce={true}
        >
          <div className="row">
            <div className="col-md-12">
              <Pagetitle title="Connect With The Team" subTitle="Team" />
            </div>
            {data.map((item) => (
              <div key={item.id} className="col-md-12 text-center">
                <TeamItem {...item} />
              </div>
            ))}
          </div>
        </AnimationOnScroll>
      </div>
    </section>
  )
}

export default Team
