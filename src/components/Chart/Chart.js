import ChartBar from './ChartBar';
import './Chart.css';

const Chart = (props) => {
    const dataPointsValues = props.dataPoints.map(dataPoints=>dataPoints.value);
    const totalMaximum = Math.max(...dataPointsValues);
    return <div className='chart'>
        {props.dataPoints.map(dataPoints =>
            <ChartBar
                value={dataPoints.value}
                maxValue={totalMaximum}
                label={dataPoints.label}
                key={dataPoints.label}
            />)}
    </div>
};

export default Chart;