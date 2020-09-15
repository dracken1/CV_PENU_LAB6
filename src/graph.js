import React, { Component } from 'react';
import { ResponsiveBullet } from '@nivo/bullet';
import './graph.css';

export default class graph extends Component {
    render() {
        return (
            <div className="graphcont">                
                <ResponsiveBullet
                    data={[
                        {
                            "id": "temp.",
                            "ranges": [
                                72,
                                42,
                                40,
                                0,
                                120
                            ],
                            "measures": [
                                14
                            ],
                            "markers": [
                                76
                            ]
                        },
                        {
                            "id": "power",
                            "ranges": [
                                0.4921605421788694,
                                0.9573017188168939,
                                0.9298719196397816,
                                0,
                                2
                            ],
                            "measures": [
                                0.5428770236777485,
                                0.9157955431717832
                            ],
                            "markers": [
                                1.2862141584734916
                            ]
                        },
                        {
                            "id": "volume",
                            "ranges": [
                                29,
                                40,
                                35,
                                41,
                                2,
                                22,
                                0,
                                80
                            ],
                            "measures": [
                                14
                            ],
                            "markers": [
                                55
                            ]
                        },
                        {
                            "id": "cost",
                            "ranges": [
                                51120,
                                146225,
                                316352,
                                0,
                                500000
                            ],
                            "measures": [
                                148382,
                                310789
                            ],
                            "markers": [
                                306998
                            ]
                        },
                        {
                            "id": "revenue",
                            "ranges": [
                                1,
                                5,
                                4,
                                0,
                                9
                            ],
                            "measures": [
                                8
                            ],
                            "markers": [
                                7.576050186914365,
                                5.5364447313596425
                            ]
                        }
                    ]}
                    margin={{ top: 50, right: 90, bottom: 50, left: 90 }}
                    spacing={46}
                    titleAlign="start"
                    titleOffsetX={-70}
                    measureSize={0.2}
                    animate={true}
                    motionStiffness={90}
                    motionDamping={12}
                />
            </div>
        )
    }
}
