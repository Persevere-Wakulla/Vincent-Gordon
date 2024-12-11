
// import { signOut } from "@/auth";
// import { Button } from "./button";
// import { useState } from "react";
// const SignOutForm = () => {
//     const [isSigningOut, setIsSigningOut] = useState(false);
// 	const [errorMessage, setErrorMessage] = useState("");

// 	const handleSignOut = async () => {
// 		setIsSigningOut(true);
// 		setErrorMessage("");
// 		try {
      
// 			const result: any = await signOut();
// 			if (result?.error) throw new Error(result?.error);
// 		} catch (error) {
// 			console.error("Error signing out:", error);
// 			setErrorMessage("Failed to sign out. Please try again");
// 			setIsSigningOut(false);
// 		}
// 	};
//     return (
//         <form action={async () => {
// 			await handleSignOut()
// 		}}>
// 			<Button  disabled={isSigningOut}>
// 				{isSigningOut ? "Signing out..." : "Sign out"}
// 			</Button>
// 			{errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}
// 		</form>
//     );
// }

// export default SignOutForm;