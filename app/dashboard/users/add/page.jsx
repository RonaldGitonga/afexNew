'use client'
import { addUser } from "../../../lib/actions";
import styles from "../../../ui/dashboard/users/addUser/addUser.module.css";
import { useState } from "react";
const AddUserPage = () => {
  const [role,setRole]=useState('Student')
  return (
    <div className={styles.container}>
      <form action={addUser} className={styles.form}>
        <input type="text" placeholder="username" name="username" required />
        <input type="email" placeholder="email" name="email" required />
        <input
          type="password"
          placeholder="password"
          name="password"
          required
        />
        <input type="phone" placeholder="phone" name="phone" />

        <select name="role" id="role" onChange={event=>setRole(event.target.value)} defaultValue={'Student'}>
         
          <option value={'Admin'}>Admin</option>
          <option value={'Finance'}>Finance</option>
          <option value={'Marketing'}>Marketing</option>
          <option value={'Tutor'}>Tutor</option>
          <option value={'Student'}>Student</option>
        </select>
        <select name="isActive" id="isActive">
          <option value={true}>
            Is Active?
          </option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        <textarea
          name="address"
          id="address"
          rows="16"
          placeholder="Address"
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddUserPage;
