import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import IntentionService from './IntentionService';
import { useParams } from 'react-router-dom';

const IntentionDetailsComponent = () => {

    const [intention, setIntention] = useState([]);
    const { intentionId } = useParams();

    useEffect(() => {
        IntentionService.getOneIntentionById(intentionId).then((response) => {
            setIntention(response.data)

        })
    });

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
                        <th scope="col">Uwagi</th>
                        <th scope="col">Ofiara</th>
                        <th scope="col">Przyjął</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        <tr>
                            <td>{intention.intentionId}</td>
                            <td>{intention.dateOfMass}</td>
                            <td>{intention.timeOfMas}</td>
                            <td>{intention.descriptionOfIntention}</td>
                            <td>{intention.priestName}</td>
                            <td>{intention.commentInfo}</td>
                            <td>{intention.payment}</td>
                            <td>{intention.whoAddIntention}</td>
                        </tr>
                    }
                </tbody>
            </table>
        </div>
    )
}

export default IntentionDetailsComponent