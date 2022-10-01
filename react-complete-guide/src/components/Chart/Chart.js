import './Chart.css';
import ChartBar from "./ChartBar";

const Chart = (props) => {
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
    const maximumTotal = Math.max(...dataPointValues);

    return (
        <div className='chart'>
            {props.dataPoints.map((datePoint) => (
                <ChartBar
                    key={datePoint.label}
                    value={datePoint.value}
                    maxValue={maximumTotal}
                    label={datePoint.label}
                />
            ))
            }
        </div>
    );
};

export default Chart;