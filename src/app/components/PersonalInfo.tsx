import Image from 'next/image';

export default function PersonalInfo() {
  return (
    <div className="personal-info">
      <h1>M.Yasir Fehmi</h1>
      <p>Email: yasirfehmi8@gmail.com</p>
      <p>Phone: 03362640495</p>
      <Image src="/profile-picture.jpg" alt="Profile Picture" width={150} height={150} />
    </div>
  );
}