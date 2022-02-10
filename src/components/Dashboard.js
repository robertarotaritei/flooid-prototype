import Grid from '@mui/material/Grid';
import Box from "@mui/material/Box";
import Graph from "react-graph-vis";
import { Pie, Bar } from 'react-chartjs-2';
import 'chart.js/auto';
import { graphMethod } from '../Methods/Graph';
import { chartData } from '../Methods/ChartData';
import React, {useRef, useState, useEffect} from "react";

function Dashboard(){
    const emptyData = {
        labels: [],
        datasets: [{
            label: '',
            data: [],
            backgroundColor: [],
            hoverOffset: 4
        }]
    };
    const data = useRef(emptyData);
    const updateData = useRef(null);
    const graph = graphMethod();
    const options = {
        layout: {
            hierarchical: false
        },
        nodes: {
            shape: "dot",
            scaling: {
            min: 5,
            max: 20,
            },
        },
        edges: {
            color: { inherit: true },
            smooth: {  roundness: 0.5 },
            font: { strokeWidth: 0 }
        },
        interaction: {
            hideEdgesOnDrag: true,
            tooltipDelay: 200,
        },
        physics: false,
        height: "100%",
        width: "100%",
    };

    const events =  {
        select: ({ nodes }) => {
            if(graph.nodes[nodes] !== undefined){
                data.current = chartData(graph.nodes[nodes], graph.edges);
                updateData.current();
            }
            else{
                data.current = emptyData;
            }
        }
    };

    const ChildCharts = ({updateData}) => {
        const [newData, setData] = useState(emptyData);
        useEffect(() => {
            updateData.current = update
          }, [updateData])
        function update(){
            setData(data.current)
        }
        return (<Grid padding={0}>
            <Grid container direction="column">
                <Grid padding={2}>
                    <div style={{ width: '35em', height: '27em', borderStyle: 'solid'}}>
                    <Pie data={newData} style={{background: '#282c34', color: 'black'}} width={"100%"} options={{ maintainAspectRatio: false, 
                    elements: { arc: { borderWidth: 0 } } }}/>
                    </div>
                </Grid>
                <Grid padding={2}>
                    <div style={{width: '35em', height: '21em', borderStyle: 'solid'}}>
                        <Bar data={newData} style={{background: '#282c34'}} width={"100%"} options={{ maintainAspectRatio: false }}/>
                    </div>
                </Grid>
            </Grid>
        </Grid>
    )};

    return (
        <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            >
            <Grid padding={2}>
                <div style={{background: '#282c34', width: '70em', height: '50em', borderStyle: 'solid'}}>
                    <Graph
                        graph={graph}
                        options={options}
                        events={events}
                        getNetwork={network => {
                            //  if you want access to vis.js network api you can set the state in a parent component using this property
                        }}
                    />
                </div>
            </Grid>
            <ChildCharts updateData={updateData}/>
        </Box>
        </div>
    );
}

export default Dashboard