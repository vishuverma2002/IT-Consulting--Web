// Barrel export for UI primitives.
// Lets feature modules import many primitives in one line:
//   import { Button, Card, Badge } from "@/components/ui";
// Keeping a barrel ONLY for the small, stable primitive layer (not for feature
// modules) avoids accidental circular dependencies.

export { default as Button } from "@/components/ui/Button";
export { default as Card, CardHeader, CardBody, CardFooter } from "@/components/ui/Card";
export { default as Badge } from "@/components/ui/Badge";
export { default as Avatar } from "@/components/ui/Avatar";
export { default as Stat } from "@/components/ui/Stat";
export { default as Table } from "@/components/ui/Table";
export { default as Accordion } from "@/components/ui/Accordion";
export { default as Section } from "@/components/ui/Section";
export { default as Reveal } from "@/components/ui/Reveal";
export { default as AnimatedSection } from "@/components/ui/AnimatedSection";
export { default as Drawer } from "@/components/ui/Drawer";
