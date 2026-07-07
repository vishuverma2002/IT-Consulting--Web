import AppointmentSection from "@/modules/appointments/AppointmentSection";

export const metadata = { title: "Appointments" };

export default function AppointmentsPage() {
  const appointments = [];
  return <AppointmentSection appointments={appointments} />;
}
