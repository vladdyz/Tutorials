import './LoadingSpinner.css'

export default function Loading() {
        return <div className="sk-circle"/>
}

/*

Loading spinner component for various react apps, using Spinkit CSS created by tobiasahlin
Link: https://tobiasahlin.com/spinkit/
Git: https://github.com/tobiasahlin/SpinKit
Install:  npm install spinkit

To integrate with other React apps, need state and effect:


const [loading, setLoading] = useState(false);

useEffect(()=> {
        // while loading some data
        setLoading(true); // init the spinner
        fetch(...) // get the data, use promises/async/whatever 
        .then(..)
        .catch(err=>{...})
        .finally(()=> {setLoading(false)};) // when everything is loaded and done, remove the spinner


}, [])



*/