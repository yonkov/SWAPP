import React from 'react';
import { RadarChart } from 'react-vis';
import { starshipsQuery } from '../client/queries/starshipQuery'
import { useQuery } from '@apollo/react-hooks';
import Loading from './Loading/Loading';
import RedirectToLogin from './RedirectToLogin/RedirectToLogin';
const RadarChartComponent = ({ starship }) => {

    const { starshipClass } = starship;
    const { data, loading, error } = useQuery(starshipsQuery, {
        variables: { starshipClass }
    })

    if (loading) return <Loading />;
    if (error) return <RedirectToLogin />

    //get current starship data
    const currentData = [starship];
    
    // get data from all starships from the same class
    const {allStarships: {edges}} = data;
    const statsData =  edges.map(edge => edge.node)
    
    //get the maximum value from each property
    const maxCost = Math.max(...statsData.map((item) => item.cost));
    const maxCrew = Math.max(...statsData.map((item) => item.crew));
    const maxAtmSpeed = Math.max(...statsData.map((item) => item.maxAtmosphericSpeed));
    const maxHDR = Math.max(...statsData.map((item) => item.hyperdriveRating));
    const maxMLPerHour = Math.max(...statsData.map((item) => item.maxMLPerHour));
    
    // add the values to te chart
    const domains = [
        { name: 'Max Atm. Speed', domain: [0, maxAtmSpeed], getValue: d => d.maxAtmosphericSpeed },
        { name: 'Cost', domain: [0, maxCost], getValue: d => d.cost },
        { name: 'Crew', domain: [0, maxCrew], getValue: d => d.crew },
        { name: 'HyperD Rat.', domain: [0, maxHDR], getValue: d => d.hyperdriveRating },
        { name: 'Max Ml/H', domain: [0, maxMLPerHour], getValue: d => d.maxMLPerHour }
    ]

    const margin = {
        top: 20,
        bottom: 20,
        left: 10,
        right: 10
    };

    const WIDTH = 400;
    const HEIGHT = 400;

    return (
        <div>
            <h3>Compared to Starship class max</h3>
            <RadarChart
                animation
                data={currentData}
                domains={domains}
                margin={margin}
                width={WIDTH}
                height={HEIGHT}
                className ={'starship-chart'}
                style={{
                    polygons: {
                        fillOpacity: 0.4,
                        strokeWidth: 2,
                        strokeOpacity: 1,
                    },
                    axes: {
                        text: {
                            opacity: 1,
                        },
                        line: {
                            strokeWidth: 2,
                        },
                    },
                    labels: {
                        textAnchor: 'middle',
                        fontSize: 12,
                        fontWeight: 600,
                    },
                }}
            >
            </RadarChart>
          
        </div>

    )
};

export default RadarChartComponent;