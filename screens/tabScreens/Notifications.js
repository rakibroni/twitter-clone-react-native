import React, { useState } from "react";
import { SafeAreaView } from "react-native";
import FloatingLabelInput from "../../components/FloatingLabelInput";
function Notifications() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  return (
    <SafeAreaView className="flex-1 bg-white pt-4">
      <FloatingLabelInput
        label="First Name"
        value={firstName}
        onChangeText={setFirstName}
      />
      <FloatingLabelInput
        label="Last Name"
        value={lastName}
        onChangeText={setLastName}
      />
    </SafeAreaView>
  );
}

export default Notifications;
