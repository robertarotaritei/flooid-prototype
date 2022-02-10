export const graphMethod = () => {
    let nr_nodes = 10 + Math.random() * 20;
    let nodes = [];
    for (var i = 0; i < nr_nodes; i++) {
        nodes.push({id: i, label: "Node " + (i + 1), font: { size: 12, color: "white", face: "arial"}});
    }
    let nr_edges = nr_nodes * 2 + Math.random() * 10;
    let edges = [];
    let relationships = ["study", "address", "work"];
    let color = ["rgb(255,0,0)", "rgb(0,128,0)", "rgb(30,144,255)"];
    for (i = 0; i < nr_edges; i++) {
        let rand_relationship = Math.round(Math.random() * (relationships.length - 1));
        edges.push({from: Math.round(Math.random() * nr_nodes), to: Math.round(Math.random() * nr_nodes), label: relationships[rand_relationship], 
            font: {size: 12, color: "white"}, color: color[rand_relationship], arrows: "none"});
    }

    return {nodes: nodes, edges: edges}
}