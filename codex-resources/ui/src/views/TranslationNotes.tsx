import TranslationNotesView from "../components/TranslationNotesView/TranslationNotesView";
import { renderToPage } from "../utilities/main-vscode";

const TranslationNotes = () => {
  return <TranslationNotesView />;
};

renderToPage(<TranslationNotes />);
