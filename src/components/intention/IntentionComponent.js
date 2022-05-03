import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import IntentionService from './IntentionService';
import { Link } from 'react-router-dom';

const IntentionComponent = () => {

    const [intentions, setIntentions] = useState([])

    useEffect(() => {
        IntentionService.getAllIntentions().then((response) => {
            setIntentions(response.data)
        })
    }, [])



    return (
        <div className='container'>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th scope="col">Lp.</th>
                        <th scope="col">Data</th>
                        <th scope="col">Godzina</th>
                        <th scope="col">Intencja</th>
                        <th scope="col">Kapłan</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        intentions.map(
                            intention =>
                                <tr key={intention.intentionId}>
                                    <td><Link to={`/intention/${intention.intentionId}`}>{intention.intentionId}</Link></td>
                                    <td>{intention.dateOfMass}</td>
                                    <td>{intention.timeOfMas}</td>
                                    <td>{intention.descriptionOfIntention}</td>
                                    <td>{intention.priestName}</td>
                                </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default IntentionComponent