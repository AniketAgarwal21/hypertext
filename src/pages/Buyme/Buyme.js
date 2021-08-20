import React, { useEffect, useState } from 'react'
import './Buyme.css'

function Buyme() {

    const [tab, setTab] = useState(0)

    useEffect(() => {
        const tabs = ["Features", "TechnicalDetails", "Pricing"]
        tabs.forEach((e, i) => {
            if (tab === i) {
                document.getElementById(tabs[tab]).style.display = "block"
            } else {
                document.getElementById(tabs[i]).style.display = "none"
            }
        })
    }, [tab])

    const openTab = (e, idx) => {
        setTab(idx)
    }

    return (
        <center>
            <div id="buying">
                <div id="all-tabs">
                    <div className="tab">
                        <center>
                            <button className="tablinks" onClick={(e) => openTab(e, 0)} id="defaultOpen">Features</button>
                            <button className="tablinks" onClick={(e) => openTab(e, 1)}>Technical Details</button>
                            <button className="tablinks" onClick={(e) => openTab(e, 2)}>Pricing</button>
                        </center>
                    </div>

                    <div id="Features" className="tabcontent">
                        <h3>Features</h3>
                        <p style={{ "textAlign": "justify", "marginTop": "5%" }}>
                            A skilled starship mechanic and fighter pilot's assistant, the R2D2 models can adapt easily to any other tasks or situations presented to them. They come with a variety of equipment useful in different types of circumstances and have the fastest processing speed that a droid can have. Tested by drowning, throwing in a quicksand and left to fend for itself in a sandstorm, the R2D2 has always managed to escape from any problem that it can not shoot or solve. From serving iced tea to battling evil battle droids, R2D2 is a loyal and valuable bot to have.
                        </p>
                    </div>

                    <div id="TechnicalDetails" className="tabcontent">
                        <h3>Technical Details</h3>
                        <table style={{ "marginTop": "5%" }}>
                            <tbody>

                                <tr><th> Height:</th><td colSpan="2">1.08 meters</td></tr>
                                <tr><th> Mass:</th><td colSpan="2">32 kilograms</td></tr>
                                <tr><th>Class:</th><td colSpan="2">Astromech Droid</td></tr>
                                <tr><th>Plating Color:</th><td colSpan="2">Blue, Silver and White</td></tr>
                                <tr><th colSpan="2">Equipment:</th></tr>
                                <tr>
                                    <td>
                                        <ul>
                                            <li>Buzz saw</li>
                                            <li>Electric pike</li>
                                            <li>Scomp Link</li>
                                            <li>Drinks tray </li>
                                            <li>Ascension cable</li>
                                            <li>Fusion welder</li>
                                            <li>Data probe</li>


                                        </ul>
                                    </td>
                                    <td><ul>
                                        <li>Power recharge coupler</li>
                                        <li>Water spout</li>
                                        <li>Rocket booster</li>
                                        <li>Holoprojector</li>
                                        <li>Motorized, all-terrain treads</li>
                                        <li>Retractable third legs</li>
                                        <li>Mark IV Locomotion System</li></ul></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div id="Pricing" className="tabcontent" style={{ "textAlign": "justify" }}>
                        <h3>Pricing</h3>
                        <div><div style={{ "fontWeight": "300" }}>Price: ₹ <strike>3,50,499.00</strike> ₹ 2,99,999/-</div> <br />
                            Warranty Details: 1 year warranty provided by the Importer from date of purchase.
                            <br /><br />
                            Get GST invoice and save up to 28% on business purchases.<br /><br />
                            Also Availabe in Black, Grey and Silver Plating.

                        </div>
                    </div>
                </div>
            </div>
        </center>

    )
}

export default Buyme
