import { Switch } from '@mui/material';
import { useState } from 'react';
import { useAppDispatch } from '../../hooks/useRedux';
import { setDarkTheme, setLightTheme } from '../../redux/slices/uiSlice/uiSlice';
import sun from "../../assets/sun.png"
import moon from "../../assets/moon.png"


const DarkSwitch = () => {
    const dispatch=useAppDispatch()
    const [checked, setChecked]=useState(true)
    const handleChange=()=>{
        setChecked(!checked)
        checked?dispatch(setDarkTheme()):dispatch(setLightTheme())
    }

    return (
        <div className="h-8 flex">
        <img src={moon} alt="moon" className='w-[30px]'/>
            <Switch
                checked={checked}
                onChange={handleChange}
                inputProps={{ 'aria-label': 'controlled' }}
            />
            <img src={sun} alt="sun" className='w-[35px] '/>
        </div>
    );
}

export default DarkSwitch;