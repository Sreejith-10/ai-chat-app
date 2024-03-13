// Import necessary components and styles
import ReactMarkdown from "react-markdown";
import {Prism as SyntaxHighlighter} from "react-syntax-highlighter";
import {tomorrow} from "react-syntax-highlighter/dist/esm/styles/prism";
// import "react-syntax-highlighter/dist/esm/styles/prism/prism.css";

// Define your React component props
interface MarkdownRendererProps {
	markdown: string;
}

// Your React component
const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({markdown}) => {
	const renderers = {
		code: ({language, value}: {language: string; value: string}) => {
			return (
				<SyntaxHighlighter language={language} style={tomorrow}>
					{value}
				</SyntaxHighlighter>
			);
		},
	};

	return <ReactMarkdown renderers={renderers}>{markdown}</ReactMarkdown>;
};

export default MarkdownRenderer;
