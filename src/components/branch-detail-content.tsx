"use client";

import React from "react";
import {
  MapPin,
  Clock,
  Phone,
  Mail,
  CreditCard,
  ArrowDownCircle,
  ArrowUpCircle,
  MessageCircle,
  Wallet,
  Bookmark,
  BookmarkCheck,
  Navigation,
  Share2,
} from "lucide-react";
import type { Branch } from "@/lib/schemas/branch";

const SERVICE_ICONS: Record<
  string,
  React.ComponentType<{ className?: string; "aria-hidden"?: boolean }>
> = {
  ATM: CreditCard,
  Deposits: ArrowDownCircle,
  Withdrawals: ArrowUpCircle,
  Consulting: MessageCircle,
  Loans: Wallet,
  "Foreign Exchange": Wallet,
};

function serviceIcon(service: string) {
  const Icon = SERVICE_ICONS[service] ?? Wallet;
  return <Icon className="h-4 w-4 shrink-0 text-[var(--primary-blue)]" aria-hidden />;
}

export interface AddressSectionProps {
  branch: Branch;
}

export function AddressSection({ branch }: AddressSectionProps) {
  return (
    <div className="flex gap-3">
      <MapPin className="h-5 w-5 shrink-0 text-[var(--primary-red)]" aria-hidden />
      <span>{branch.address}</span>
    </div>
  );
}

export interface ContactSectionProps {
  branch: Branch;
}

export function ContactSection({ branch }: ContactSectionProps) {
  if (!branch.phone && !branch.email) {
    return <p className="text-[var(--gray-333)]/70">Not provided</p>;
  }
  return (
    <div className="flex flex-col gap-2">
      {branch.phone && (
        <a
          href={`tel:${branch.phone.replace(/\s/g, "")}`}
          className="flex items-center gap-3 text-[var(--primary-blue)] underline-offset-2 hover:underline"
          aria-label="Call branch"
        >
          <Phone className="h-5 w-5 shrink-0" aria-hidden />
          <span>{branch.phone}</span>
        </a>
      )}
      {branch.email && (
        <a
          href={`mailto:${branch.email}`}
          className="flex items-center gap-3 text-[var(--primary-blue)] underline-offset-2 hover:underline"
          aria-label="Email branch"
        >
          <Mail className="h-5 w-5 shrink-0" aria-hidden />
          <span>{branch.email}</span>
        </a>
      )}
    </div>
  );
}

export interface HoursSectionProps {
  branch: Branch;
}

export function HoursSection({ branch }: HoursSectionProps) {
  return (
    <div className="flex gap-3">
      <Clock className="h-5 w-5 shrink-0 text-[var(--primary-blue)]" aria-hidden />
      <span>{branch.hours}</span>
    </div>
  );
}

export interface ServicesSectionProps {
  branch: Branch;
}

export function ServicesSection({ branch }: ServicesSectionProps) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {branch.services.map((s) => (
        <span
          key={s}
          className="inline-flex items-center gap-1.5 rounded bg-[var(--gray-f5)] px-3 py-1.5 text-sm text-[var(--gray-333)]"
        >
          {serviceIcon(s)}
          {s}
        </span>
      ))}
    </div>
  );
}

export interface BranchDetailActionsProps {
  branch: Branch;
  isSaved: boolean;
  onToggleSaved: () => void;
}

export function BranchDetailActions({
  branch,
  isSaved,
  onToggleSaved,
}: BranchDetailActionsProps) {
  return (
    <div className="flex flex-col gap-2">
      <button
        type="button"
        onClick={onToggleSaved}
        className="flex w-full items-center justify-center gap-2 rounded bg-[var(--primary-blue)] px-4 py-2 text-sm font-medium text-white transition-colors hover:opacity-90"
        aria-label={isSaved ? "Remove from saved" : "Save location"}
      >
        {isSaved ? (
          <>
            <BookmarkCheck className="h-5 w-5" aria-hidden />
            Saved
          </>
        ) : (
          <>
            <Bookmark className="h-5 w-5" aria-hidden />
            Save Location
          </>
        )}
      </button>
      <button
        type="button"
        disabled
        aria-disabled="true"
        className="flex w-full items-center justify-center gap-2 rounded bg-[var(--gray-f5)] px-4 py-2 text-sm font-medium text-[var(--gray-333)]/60"
        aria-label="Get directions (coming soon)"
      >
        <Navigation className="h-5 w-5" aria-hidden />
        <span>Get Directions</span>
        <span className="text-xs text-[var(--gray-333)]/50">Coming soon</span>
      </button>
      <button
        type="button"
        disabled
        aria-disabled="true"
        className="flex w-full items-center justify-center gap-2 rounded bg-[var(--gray-f5)] px-4 py-2 text-sm font-medium text-[var(--gray-333)]/60"
        aria-label="Share (coming soon)"
      >
        <Share2 className="h-5 w-5" aria-hidden />
        <span>Share</span>
        <span className="text-xs text-[var(--gray-333)]/50">Coming soon</span>
      </button>
    </div>
  );
}
