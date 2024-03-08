# React + TypeScript + Vite
npm init vite 프로젝트명 --template typescript
npm run dev
로 실행

## 컴포넌트 구조 및 사용 방법
1. App.tsx에서 서버로부터 할 일 목록을 받아와서 redux로 데이터를 보내고, MakeTodo.tsx, Working.tsx, Done.tsx 세 컴포넌트를 가지고 있습니다.
   - MakeTodo.tsx: 할 일을 새로 추가하는 로직의 컴포넌트입니다.
   - Working.tsx: 할 일 목록 중, isDone 상태가 false인 목록들만 보여주는 컴포넌트입니다.
   - Done.tsx: 할 일 목록 중, isDone 상태가 true인 목록들만 보여주는 컴포넌트입니다.
2. Todolist.tsx: 할 일 목록 중 isDone 상태를 변경하고, Working.tsx와 Done.tsx에서 내려준 isDone 상태에 따라서 showingList를 보여주는 컴포넌트 입니다.

