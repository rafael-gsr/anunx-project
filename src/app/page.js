import { Switch } from "@mui/material";

const label = {inputProps: {'aria-label': 'Switch demo'}}

export default function Home() {
  return (
    <div>
      <div>
        <span>With Default Theme</span>
      </div>
      <Switch {...label} defaultChecked/>
      <Switch {...label}/>
      <Switch {...label} disabled defaultChecked/>
    </div>
  );
}
