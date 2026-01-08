import styled from "styled-components"
import CardAddForm from "./CardAddForm"
import CardEditorForm from "./CardEditorForm"

const EditorDiv = styled.div`
	flex-basis: 50%;
	border-right: 1px solid #9E7676;/* editor와 preview사이에 구분선 넣기 */
	padding: 0.5em 2em;
	overflow-y: auto;
`
const TitleH1 = styled.h1`
	width: 100%;
	text-align: center;
	margin-bottom: 1em;
	color: #594545;
`
const PreviewDiv = styled.div`
    flex-basis: 50%;
    overflow-y: auto;/* 스크롤링 되게 만들고 */
`

const CardEditor = ({FileInput, cards, insertOrUpdateCard, deleteCard}) => {
  return (
    <EditorDiv>
			<PreviewDiv>
				<TitleH1>Card Editor</TitleH1>
				{Object.keys(cards).map(key => (
					<CardEditorForm FileInput={FileInput} key={key} card={cards[key]}
					// nosql은 입력, 수정은 하나로 처리 가능함 -> id가 존재하면 수정함(없으면 입력)
						insertOrUpdateCard={insertOrUpdateCard} // 수정
						deleteCard={deleteCard} // 삭제
					/>
				))}
				{/* 새로 작성하기 이므로 card넘길 필요없음 */}
				<CardAddForm FileInput={FileInput} insertOrUpdateCard={insertOrUpdateCard} // 입력
				deleteCard={deleteCard}// 입력  
				/>
			</PreviewDiv>
    </EditorDiv>
		
  )
}

export default CardEditor
