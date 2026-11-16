# MediCare — სტუდენტი 3

## პასუხისმგებლობა
სამედიცინო ბარათი და ჩატი

## გაშვება
ZIP გაშალეთ, ტერმინალი გახსენით ამ საქაღალდეში (სადაც package.json არის) და გაუშვით:

```bash
npm install
npm run dev
```

Production: `npm run build`. საჭიროა Node.js 20.19+ ან 22.12+.

## ინდივიდუალური ფაილები
- `src/components/PatientDashboard.tsx`
- `src/components/RecordCard.tsx`
- `src/components/ChatWidget.tsx`
- `src/components/MessageItem.tsx`
- `src/hooks/useMedicalRecords.ts`
- `src/hooks/useChat.ts`
- `src/store/index.ts`
- `src/data/records.json`
- `src/utils/createId.ts`

`App.tsx`, ტიპები, სტილები და კონფიგურაცია წარმოადგენს დამოუკიდებელი დემოს საერთო ინფრასტრუქტურას. სტუდენტებს 2 და 3 აქვთ ერთი და იგივე Redux store ინტეგრაციისთვის. გაერთიანებისას გამოიყენეთ თავდაპირველი პროექტის App.tsx და შეაერთეთ მოდულები; ინდივიდუალური App.tsx ფაილები ერთმანეთზე არ გადააწეროთ.

მონაცემები გამოგონილია. რეალური პაციენტის მონაცემები არ შეიყვანოთ. Backend არ არსებობს.
