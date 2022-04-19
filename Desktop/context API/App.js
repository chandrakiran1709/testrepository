import Form from "./Form";
import { ContentContext } from "./ContentContext";

export default function App() {
  return (
    <>
      <div>
        <ContentContext>
          <Form />
        </ContentContext>
      </div>
    </>
  );
}
