import * as React from "react"
import { Bell, History, PanelLeft, Sun } from 'lucide-react';
import './styles/control-bar.scss';

export function ControlBar() {
  return(
    <div className="control-bar">
      <div className="icon-container"><Sun /></div>
      <div className="icon-container"><History /></div>
      <div className="icon-container"><Bell /></div>
      <div className="icon-container"><PanelLeft /></div>
    </div>
  )
}
export default ControlBar;
