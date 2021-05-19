import React, { PureComponent } from "react";
import * as d3 from 'd3';
import { http } from "../../http/index";

class Index extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
          sh: {},
      };
  }

  componentDidMount() {
      this.getShChartData();
  }

  drawChart() {
      let w = 40;
      let h = 20;
      const data = [12, 5, 6, 6, 9, 10];
      
      const svg = d3.select("body")
          .append("svg")
          .attr("width", w)
          .attr("height", h)
          .style("margin-left", 100);
                    
      svg.selectAll("rect")
          .data(data)
          .enter()
          .append("rect")
          .attr("x", (d, i) => i * 70)
          .attr("y", (d, i) => h - 10 * d)
          .attr("width", 65)
          .attr("height", (d, i) => d * 10)
          .attr("fill", "green")
  }

  async getShChartData() {
      try {
          let cb = 'jQuery112402563498845256478_1617709789739';
          let secid = '1.000001';
          let ut = 'fa5fd1943c7b386f172d6893dbfba10b';
          let fields1 = 'f1%2Cf2%2Cf3%2Cf4%2Cf5%2Cf6%2Cf7%2Cf8%2Cf9%2Cf10%2Cf11';
          let fields2 = 'f51%2Cf53%2Cf56%2Cf58';
          let iscr = '0';
          let ndays = '1';
          let _ = '1617709789778';
          const res = await http.get(`/api/qt/stock/trends2/get?cb=${cb}&secid=${secid}&ut=${ut}&fields1=${fields1}&fields2=${fields2}&iscr=${iscr}&ndays=${ndays}&_=${_}`);
          let jsonStr = res.data.match(/\{([^)]*)\}/);
          let { data } = JSON.parse(jsonStr[0]);
          console.log('data--->', data);
          this.setState({
            sh: data
          })
      } catch (err) {

      }
  }

  render() {
      return <div id={"#" + this.props.id}></div>
  }
}

export default Index;
