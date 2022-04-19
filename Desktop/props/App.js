import ReusableCmpt from './ReusableCmpt';
import "./App.css";
function App() {
  return (
    <div className="App">
      <h1>John Doe</h1>
      <img src={require('./Sample_User_Icon.png')}/>
      <ReusableCmpt title = "Summary" content = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate exercitationem, vero quo quisquam sint dolorum eaque corrupti maiores enim accusamus nemo quae magni cum officia deleniti distinctio tempora nobis rerum. vero quo quisquam sint dolorum eaque corrupti" content1 = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga quam laborum animi neque voluptatem quisquam."/>
      <ReusableCmpt title = "Experience" content ="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate exercitationem, vero quo quisquam sint dolorum eaque corrupti maiores enim accusamus nemo quae magni cum officia deleniti distinctio tempora nobis rerum. vero quo quisquam sint dolorum eaque corrupti" content1 = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga quam laborum animi neque voluptatem quisquam."/>
      <ReusableCmpt title = "Contact" content ="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, neque? Sit dicta consequatur voluptates mollitia vero enim reiciendis optio, nam voluptas voluptate ab accusamus quidem omnis, aut perferendis suscipit dolores nobis quibusdam eos nisi excepturi!"/>
    </div>
  );
}

export default App;
