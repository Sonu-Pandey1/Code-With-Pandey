import  { useState } from "react";
import sidebarcss from "./Sidevar.module.css";
import CourseDetails from "./CourseDetails";
import RightContain from './RightContain';
import { Collapse, Button } from "@blueprintjs/core";
import { AlignRight } from 'lucide-react';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <>
      <div className={sidebarcss.maincontain}>
        <Collapse isOpen={isOpen}>
          <div className={sidebarcss.sidebar}>
            <CourseDetails />
          </div>
        </Collapse>
        <Button
        className={sidebarcss.responsivebtn}
        onClick={() => setIsOpen(!isOpen)}
      >
        <AlignRight/>
      </Button>
        <div className={sidebarcss.RightContain}>
          <RightContain />
        </div>
      </div>
      
    </>
  );
}


