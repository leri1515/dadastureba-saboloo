# MediCare — სტუდენტი 2

## პასუხისმგებლობა
ვიზიტის დაჯავშნა

## გაშვება
ZIP გაშალეთ, ტერმინალი გახსენით ამ საქაღალდეში (სადაც package.json არის) და გაუშვით:

```bash
npm install
npm run dev
```

Production: `npm run build`. საჭიროა Node.js 20.19+ ან 22.12+.

## ინდივიდუალური ფაილები
- `src/components/BookingModal.tsx`
- `src/components/BookingForm.tsx`
- `src/hooks/useBookingForm.ts`
- `src/store/index.ts`
- `src/data/records.json`
- `src/data/doctors.json`

`App.tsx`, ტიპები, სტილები და კონფიგურაცია წარმოადგენს დამოუკიდებელი დემოს საერთო ინფრასტრუქტურას. სტუდენტებს 2 და 3 აქვთ ერთი და იგივე Redux store ინტეგრაციისთვის. გაერთიანებისას გამოიყენეთ თავდაპირველი პროექტის App.tsx და შეაერთეთ მოდულები; ინდივიდუალური App.tsx ფაილები ერთმანეთზე არ გადააწეროთ.

მონაცემები გამოგონილია. რეალური პაციენტის მონაცემები არ შეიყვანოთ. Backend არ არსებობს.
