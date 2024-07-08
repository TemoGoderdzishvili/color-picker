"use client"
import styles from "./Picker.module.css"
import { useState } from "react"

const Picker = () => {
    const [color, setColor] = useState('#ffffff')

    const onChange = (e: any) => {
        setColor(e.target.value)
    }

    return (
        <div className={styles.container}>
            <h1>Color Picker</h1>
            <div className={styles.colorDisplay} style={{ backgroundColor: color }}>
                <p>Color: <span className={styles.colorCode}>{color}</span></p>
            </div>
            <p className={styles.select}>Select a Color:</p>
            <input type="color" value={color} onChange={onChange} />
        </div>
    )
}
export default Picker