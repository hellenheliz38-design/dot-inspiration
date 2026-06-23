import type { QueryKey, UseMutationOptions, UseMutationResult, UseQueryOptions, UseQueryResult } from '@tanstack/react-query';
import type { Announcement, AnnouncementInput, AnnouncementUpdate, BlogPost, BlogPostInput, BlogPostUpdate, ContactMessage, ContactMessageInput, ContactMessageUpdate, DashboardStats, Donation, DonationInput, DonorProfile, Event, EventInput, EventUpdate, ExternalJob, FundraisingProject, FundraisingProjectInput, FundraisingProjectUpdate, GalleryPhoto, GalleryPhotoInput, HealthStatus, Job, JobApplication, JobApplicationInput, JobApplicationUpdate, JobInput, JobUpdate, LeaderboardEntry, ListBlogPostsParams, ListExternalJobsParams, ListJobApplicationsParams, ListJobsParams, LoanRequest, LoanRequestInput, LoanRequestUpdate, Member, MemberInput, MemberUpdate, MobileMoneyInitiate, MobileMoneyResponse, MobileMoneyTransaction, NewsletterSubscriber, NewsletterSubscriberInput, PublicStats, Volunteer, VolunteerAssignment, VolunteerAssignmentInput, VolunteerInput, VolunteerUpdate } from './api.schemas';
import { customFetch } from '../custom-fetch';
import type { ErrorType, BodyType } from '../custom-fetch';
type AwaitedInput<T> = PromiseLike<T> | T;
type Awaited<O> = O extends AwaitedInput<infer T> ? T : never;
type SecondParameter<T extends (...args: never) => unknown> = Parameters<T>[1];
export declare const getHealthCheckUrl: () => string;
/**
 * @summary Health check
 */
export declare const healthCheck: (options?: RequestInit) => Promise<HealthStatus>;
export declare const getHealthCheckQueryKey: () => readonly ["/api/healthz"];
export declare const getHealthCheckQueryOptions: <TData = Awaited<ReturnType<typeof healthCheck>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData> & {
    queryKey: QueryKey;
};
export type HealthCheckQueryResult = NonNullable<Awaited<ReturnType<typeof healthCheck>>>;
export type HealthCheckQueryError = ErrorType<unknown>;
/**
 * @summary Health check
 */
export declare function useHealthCheck<TData = Awaited<ReturnType<typeof healthCheck>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getListMembersUrl: () => string;
/**
 * @summary List all members
 */
export declare const listMembers: (options?: RequestInit) => Promise<Member[]>;
export declare const getListMembersQueryKey: () => readonly ["/api/members"];
export declare const getListMembersQueryOptions: <TData = Awaited<ReturnType<typeof listMembers>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listMembers>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof listMembers>>, TError, TData> & {
    queryKey: QueryKey;
};
export type ListMembersQueryResult = NonNullable<Awaited<ReturnType<typeof listMembers>>>;
export type ListMembersQueryError = ErrorType<unknown>;
/**
 * @summary List all members
 */
export declare function useListMembers<TData = Awaited<ReturnType<typeof listMembers>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listMembers>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getCreateMemberUrl: () => string;
/**
 * @summary Register a new member
 */
export declare const createMember: (memberInput: MemberInput, options?: RequestInit) => Promise<Member>;
export declare const getCreateMemberMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createMember>>, TError, {
        data: BodyType<MemberInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof createMember>>, TError, {
    data: BodyType<MemberInput>;
}, TContext>;
export type CreateMemberMutationResult = NonNullable<Awaited<ReturnType<typeof createMember>>>;
export type CreateMemberMutationBody = BodyType<MemberInput>;
export type CreateMemberMutationError = ErrorType<unknown>;
/**
* @summary Register a new member
*/
export declare const useCreateMember: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createMember>>, TError, {
        data: BodyType<MemberInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof createMember>>, TError, {
    data: BodyType<MemberInput>;
}, TContext>;
export declare const getGetMemberUrl: (id: number) => string;
/**
 * @summary Get a member by ID
 */
export declare const getMember: (id: number, options?: RequestInit) => Promise<Member>;
export declare const getGetMemberQueryKey: (id: number) => readonly [`/api/members/${number}`];
export declare const getGetMemberQueryOptions: <TData = Awaited<ReturnType<typeof getMember>>, TError = ErrorType<void>>(id: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getMember>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getMember>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetMemberQueryResult = NonNullable<Awaited<ReturnType<typeof getMember>>>;
export type GetMemberQueryError = ErrorType<void>;
/**
 * @summary Get a member by ID
 */
export declare function useGetMember<TData = Awaited<ReturnType<typeof getMember>>, TError = ErrorType<void>>(id: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getMember>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getUpdateMemberUrl: (id: number) => string;
/**
 * @summary Update a member
 */
export declare const updateMember: (id: number, memberUpdate: MemberUpdate, options?: RequestInit) => Promise<Member>;
export declare const getUpdateMemberMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateMember>>, TError, {
        id: number;
        data: BodyType<MemberUpdate>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof updateMember>>, TError, {
    id: number;
    data: BodyType<MemberUpdate>;
}, TContext>;
export type UpdateMemberMutationResult = NonNullable<Awaited<ReturnType<typeof updateMember>>>;
export type UpdateMemberMutationBody = BodyType<MemberUpdate>;
export type UpdateMemberMutationError = ErrorType<unknown>;
/**
* @summary Update a member
*/
export declare const useUpdateMember: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateMember>>, TError, {
        id: number;
        data: BodyType<MemberUpdate>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof updateMember>>, TError, {
    id: number;
    data: BodyType<MemberUpdate>;
}, TContext>;
export declare const getDeleteMemberUrl: (id: number) => string;
/**
 * @summary Delete a member
 */
export declare const deleteMember: (id: number, options?: RequestInit) => Promise<void>;
export declare const getDeleteMemberMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof deleteMember>>, TError, {
        id: number;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof deleteMember>>, TError, {
    id: number;
}, TContext>;
export type DeleteMemberMutationResult = NonNullable<Awaited<ReturnType<typeof deleteMember>>>;
export type DeleteMemberMutationError = ErrorType<unknown>;
/**
* @summary Delete a member
*/
export declare const useDeleteMember: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof deleteMember>>, TError, {
        id: number;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof deleteMember>>, TError, {
    id: number;
}, TContext>;
export declare const getListVolunteersUrl: () => string;
/**
 * @summary List volunteer applications
 */
export declare const listVolunteers: (options?: RequestInit) => Promise<Volunteer[]>;
export declare const getListVolunteersQueryKey: () => readonly ["/api/volunteers"];
export declare const getListVolunteersQueryOptions: <TData = Awaited<ReturnType<typeof listVolunteers>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listVolunteers>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof listVolunteers>>, TError, TData> & {
    queryKey: QueryKey;
};
export type ListVolunteersQueryResult = NonNullable<Awaited<ReturnType<typeof listVolunteers>>>;
export type ListVolunteersQueryError = ErrorType<unknown>;
/**
 * @summary List volunteer applications
 */
export declare function useListVolunteers<TData = Awaited<ReturnType<typeof listVolunteers>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listVolunteers>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getCreateVolunteerUrl: () => string;
/**
 * @summary Submit a volunteer application
 */
export declare const createVolunteer: (volunteerInput: VolunteerInput, options?: RequestInit) => Promise<Volunteer>;
export declare const getCreateVolunteerMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createVolunteer>>, TError, {
        data: BodyType<VolunteerInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof createVolunteer>>, TError, {
    data: BodyType<VolunteerInput>;
}, TContext>;
export type CreateVolunteerMutationResult = NonNullable<Awaited<ReturnType<typeof createVolunteer>>>;
export type CreateVolunteerMutationBody = BodyType<VolunteerInput>;
export type CreateVolunteerMutationError = ErrorType<unknown>;
/**
* @summary Submit a volunteer application
*/
export declare const useCreateVolunteer: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createVolunteer>>, TError, {
        data: BodyType<VolunteerInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof createVolunteer>>, TError, {
    data: BodyType<VolunteerInput>;
}, TContext>;
export declare const getApplyVolunteerUrl: () => string;
/**
 * @summary Public volunteer application (no authentication required)
 */
export declare const applyVolunteer: (volunteerInput: VolunteerInput, options?: RequestInit) => Promise<Volunteer>;
export declare const getApplyVolunteerMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof applyVolunteer>>, TError, {
        data: BodyType<VolunteerInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof applyVolunteer>>, TError, {
    data: BodyType<VolunteerInput>;
}, TContext>;
export type ApplyVolunteerMutationResult = NonNullable<Awaited<ReturnType<typeof applyVolunteer>>>;
export type ApplyVolunteerMutationBody = BodyType<VolunteerInput>;
export type ApplyVolunteerMutationError = ErrorType<unknown>;
/**
* @summary Public volunteer application (no authentication required)
*/
export declare const useApplyVolunteer: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof applyVolunteer>>, TError, {
        data: BodyType<VolunteerInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof applyVolunteer>>, TError, {
    data: BodyType<VolunteerInput>;
}, TContext>;
export declare const getGetVolunteerUrl: (id: number) => string;
/**
 * @summary Get a volunteer application
 */
export declare const getVolunteer: (id: number, options?: RequestInit) => Promise<Volunteer>;
export declare const getGetVolunteerQueryKey: (id: number) => readonly [`/api/volunteers/${number}`];
export declare const getGetVolunteerQueryOptions: <TData = Awaited<ReturnType<typeof getVolunteer>>, TError = ErrorType<void>>(id: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getVolunteer>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getVolunteer>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetVolunteerQueryResult = NonNullable<Awaited<ReturnType<typeof getVolunteer>>>;
export type GetVolunteerQueryError = ErrorType<void>;
/**
 * @summary Get a volunteer application
 */
export declare function useGetVolunteer<TData = Awaited<ReturnType<typeof getVolunteer>>, TError = ErrorType<void>>(id: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getVolunteer>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getUpdateVolunteerUrl: (id: number) => string;
/**
 * @summary Update volunteer application status
 */
export declare const updateVolunteer: (id: number, volunteerUpdate: VolunteerUpdate, options?: RequestInit) => Promise<Volunteer>;
export declare const getUpdateVolunteerMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateVolunteer>>, TError, {
        id: number;
        data: BodyType<VolunteerUpdate>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof updateVolunteer>>, TError, {
    id: number;
    data: BodyType<VolunteerUpdate>;
}, TContext>;
export type UpdateVolunteerMutationResult = NonNullable<Awaited<ReturnType<typeof updateVolunteer>>>;
export type UpdateVolunteerMutationBody = BodyType<VolunteerUpdate>;
export type UpdateVolunteerMutationError = ErrorType<unknown>;
/**
* @summary Update volunteer application status
*/
export declare const useUpdateVolunteer: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateVolunteer>>, TError, {
        id: number;
        data: BodyType<VolunteerUpdate>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof updateVolunteer>>, TError, {
    id: number;
    data: BodyType<VolunteerUpdate>;
}, TContext>;
export declare const getDeleteVolunteerUrl: (id: number) => string;
/**
 * @summary Delete a volunteer application
 */
export declare const deleteVolunteer: (id: number, options?: RequestInit) => Promise<void>;
export declare const getDeleteVolunteerMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof deleteVolunteer>>, TError, {
        id: number;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof deleteVolunteer>>, TError, {
    id: number;
}, TContext>;
export type DeleteVolunteerMutationResult = NonNullable<Awaited<ReturnType<typeof deleteVolunteer>>>;
export type DeleteVolunteerMutationError = ErrorType<unknown>;
/**
* @summary Delete a volunteer application
*/
export declare const useDeleteVolunteer: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof deleteVolunteer>>, TError, {
        id: number;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof deleteVolunteer>>, TError, {
    id: number;
}, TContext>;
export declare const getListEventsUrl: () => string;
/**
 * @summary List all events
 */
export declare const listEvents: (options?: RequestInit) => Promise<Event[]>;
export declare const getListEventsQueryKey: () => readonly ["/api/events"];
export declare const getListEventsQueryOptions: <TData = Awaited<ReturnType<typeof listEvents>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listEvents>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof listEvents>>, TError, TData> & {
    queryKey: QueryKey;
};
export type ListEventsQueryResult = NonNullable<Awaited<ReturnType<typeof listEvents>>>;
export type ListEventsQueryError = ErrorType<unknown>;
/**
 * @summary List all events
 */
export declare function useListEvents<TData = Awaited<ReturnType<typeof listEvents>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listEvents>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getCreateEventUrl: () => string;
/**
 * @summary Create a new event
 */
export declare const createEvent: (eventInput: EventInput, options?: RequestInit) => Promise<Event>;
export declare const getCreateEventMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createEvent>>, TError, {
        data: BodyType<EventInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof createEvent>>, TError, {
    data: BodyType<EventInput>;
}, TContext>;
export type CreateEventMutationResult = NonNullable<Awaited<ReturnType<typeof createEvent>>>;
export type CreateEventMutationBody = BodyType<EventInput>;
export type CreateEventMutationError = ErrorType<unknown>;
/**
* @summary Create a new event
*/
export declare const useCreateEvent: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createEvent>>, TError, {
        data: BodyType<EventInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof createEvent>>, TError, {
    data: BodyType<EventInput>;
}, TContext>;
export declare const getListUpcomingEventsUrl: () => string;
/**
 * @summary List upcoming events
 */
export declare const listUpcomingEvents: (options?: RequestInit) => Promise<Event[]>;
export declare const getListUpcomingEventsQueryKey: () => readonly ["/api/events/upcoming"];
export declare const getListUpcomingEventsQueryOptions: <TData = Awaited<ReturnType<typeof listUpcomingEvents>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listUpcomingEvents>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof listUpcomingEvents>>, TError, TData> & {
    queryKey: QueryKey;
};
export type ListUpcomingEventsQueryResult = NonNullable<Awaited<ReturnType<typeof listUpcomingEvents>>>;
export type ListUpcomingEventsQueryError = ErrorType<unknown>;
/**
 * @summary List upcoming events
 */
export declare function useListUpcomingEvents<TData = Awaited<ReturnType<typeof listUpcomingEvents>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listUpcomingEvents>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getGetEventUrl: (id: number) => string;
/**
 * @summary Get an event by ID
 */
export declare const getEvent: (id: number, options?: RequestInit) => Promise<Event>;
export declare const getGetEventQueryKey: (id: number) => readonly [`/api/events/${number}`];
export declare const getGetEventQueryOptions: <TData = Awaited<ReturnType<typeof getEvent>>, TError = ErrorType<void>>(id: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getEvent>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getEvent>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetEventQueryResult = NonNullable<Awaited<ReturnType<typeof getEvent>>>;
export type GetEventQueryError = ErrorType<void>;
/**
 * @summary Get an event by ID
 */
export declare function useGetEvent<TData = Awaited<ReturnType<typeof getEvent>>, TError = ErrorType<void>>(id: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getEvent>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getUpdateEventUrl: (id: number) => string;
/**
 * @summary Update an event
 */
export declare const updateEvent: (id: number, eventUpdate: EventUpdate, options?: RequestInit) => Promise<Event>;
export declare const getUpdateEventMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateEvent>>, TError, {
        id: number;
        data: BodyType<EventUpdate>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof updateEvent>>, TError, {
    id: number;
    data: BodyType<EventUpdate>;
}, TContext>;
export type UpdateEventMutationResult = NonNullable<Awaited<ReturnType<typeof updateEvent>>>;
export type UpdateEventMutationBody = BodyType<EventUpdate>;
export type UpdateEventMutationError = ErrorType<unknown>;
/**
* @summary Update an event
*/
export declare const useUpdateEvent: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateEvent>>, TError, {
        id: number;
        data: BodyType<EventUpdate>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof updateEvent>>, TError, {
    id: number;
    data: BodyType<EventUpdate>;
}, TContext>;
export declare const getDeleteEventUrl: (id: number) => string;
/**
 * @summary Delete an event
 */
export declare const deleteEvent: (id: number, options?: RequestInit) => Promise<void>;
export declare const getDeleteEventMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof deleteEvent>>, TError, {
        id: number;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof deleteEvent>>, TError, {
    id: number;
}, TContext>;
export type DeleteEventMutationResult = NonNullable<Awaited<ReturnType<typeof deleteEvent>>>;
export type DeleteEventMutationError = ErrorType<unknown>;
/**
* @summary Delete an event
*/
export declare const useDeleteEvent: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof deleteEvent>>, TError, {
        id: number;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof deleteEvent>>, TError, {
    id: number;
}, TContext>;
export declare const getListDonationsUrl: () => string;
/**
 * @summary List all donations
 */
export declare const listDonations: (options?: RequestInit) => Promise<Donation[]>;
export declare const getListDonationsQueryKey: () => readonly ["/api/donations"];
export declare const getListDonationsQueryOptions: <TData = Awaited<ReturnType<typeof listDonations>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listDonations>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof listDonations>>, TError, TData> & {
    queryKey: QueryKey;
};
export type ListDonationsQueryResult = NonNullable<Awaited<ReturnType<typeof listDonations>>>;
export type ListDonationsQueryError = ErrorType<unknown>;
/**
 * @summary List all donations
 */
export declare function useListDonations<TData = Awaited<ReturnType<typeof listDonations>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listDonations>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getCreateDonationUrl: () => string;
/**
 * @summary Record a donation
 */
export declare const createDonation: (donationInput: DonationInput, options?: RequestInit) => Promise<Donation>;
export declare const getCreateDonationMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createDonation>>, TError, {
        data: BodyType<DonationInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof createDonation>>, TError, {
    data: BodyType<DonationInput>;
}, TContext>;
export type CreateDonationMutationResult = NonNullable<Awaited<ReturnType<typeof createDonation>>>;
export type CreateDonationMutationBody = BodyType<DonationInput>;
export type CreateDonationMutationError = ErrorType<unknown>;
/**
* @summary Record a donation
*/
export declare const useCreateDonation: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createDonation>>, TError, {
        data: BodyType<DonationInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof createDonation>>, TError, {
    data: BodyType<DonationInput>;
}, TContext>;
export declare const getGetDonationUrl: (id: number) => string;
/**
 * @summary Get a donation by ID
 */
export declare const getDonation: (id: number, options?: RequestInit) => Promise<Donation>;
export declare const getGetDonationQueryKey: (id: number) => readonly [`/api/donations/${number}`];
export declare const getGetDonationQueryOptions: <TData = Awaited<ReturnType<typeof getDonation>>, TError = ErrorType<void>>(id: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getDonation>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getDonation>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetDonationQueryResult = NonNullable<Awaited<ReturnType<typeof getDonation>>>;
export type GetDonationQueryError = ErrorType<void>;
/**
 * @summary Get a donation by ID
 */
export declare function useGetDonation<TData = Awaited<ReturnType<typeof getDonation>>, TError = ErrorType<void>>(id: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getDonation>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getDeleteDonationUrl: (id: number) => string;
/**
 * @summary Delete a donation record
 */
export declare const deleteDonation: (id: number, options?: RequestInit) => Promise<void>;
export declare const getDeleteDonationMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof deleteDonation>>, TError, {
        id: number;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof deleteDonation>>, TError, {
    id: number;
}, TContext>;
export type DeleteDonationMutationResult = NonNullable<Awaited<ReturnType<typeof deleteDonation>>>;
export type DeleteDonationMutationError = ErrorType<unknown>;
/**
* @summary Delete a donation record
*/
export declare const useDeleteDonation: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof deleteDonation>>, TError, {
        id: number;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof deleteDonation>>, TError, {
    id: number;
}, TContext>;
export declare const getGetMyDonationsUrl: () => string;
/**
 * @summary Get authenticated donor's donation history, badges and impact score
 */
export declare const getMyDonations: (options?: RequestInit) => Promise<DonorProfile>;
export declare const getGetMyDonationsQueryKey: () => readonly ["/api/donations/my"];
export declare const getGetMyDonationsQueryOptions: <TData = Awaited<ReturnType<typeof getMyDonations>>, TError = ErrorType<void>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getMyDonations>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getMyDonations>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetMyDonationsQueryResult = NonNullable<Awaited<ReturnType<typeof getMyDonations>>>;
export type GetMyDonationsQueryError = ErrorType<void>;
/**
 * @summary Get authenticated donor's donation history, badges and impact score
 */
export declare function useGetMyDonations<TData = Awaited<ReturnType<typeof getMyDonations>>, TError = ErrorType<void>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getMyDonations>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getInitiateMobileMoneyPaymentUrl: () => string;
/**
 * @summary Initiate an MTN MoMo or Airtel Money donation
 */
export declare const initiateMobileMoneyPayment: (mobileMoneyInitiate: MobileMoneyInitiate, options?: RequestInit) => Promise<MobileMoneyResponse>;
export declare const getInitiateMobileMoneyPaymentMutationOptions: <TError = ErrorType<void>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof initiateMobileMoneyPayment>>, TError, {
        data: BodyType<MobileMoneyInitiate>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof initiateMobileMoneyPayment>>, TError, {
    data: BodyType<MobileMoneyInitiate>;
}, TContext>;
export type InitiateMobileMoneyPaymentMutationResult = NonNullable<Awaited<ReturnType<typeof initiateMobileMoneyPayment>>>;
export type InitiateMobileMoneyPaymentMutationBody = BodyType<MobileMoneyInitiate>;
export type InitiateMobileMoneyPaymentMutationError = ErrorType<void>;
/**
* @summary Initiate an MTN MoMo or Airtel Money donation
*/
export declare const useInitiateMobileMoneyPayment: <TError = ErrorType<void>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof initiateMobileMoneyPayment>>, TError, {
        data: BodyType<MobileMoneyInitiate>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof initiateMobileMoneyPayment>>, TError, {
    data: BodyType<MobileMoneyInitiate>;
}, TContext>;
export declare const getGetMobileMoneyStatusUrl: (reference: string) => string;
/**
 * @summary Check status of a Mobile Money transaction
 */
export declare const getMobileMoneyStatus: (reference: string, options?: RequestInit) => Promise<MobileMoneyTransaction>;
export declare const getGetMobileMoneyStatusQueryKey: (reference: string) => readonly [`/api/mobile-money/status/${string}`];
export declare const getGetMobileMoneyStatusQueryOptions: <TData = Awaited<ReturnType<typeof getMobileMoneyStatus>>, TError = ErrorType<void>>(reference: string, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getMobileMoneyStatus>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getMobileMoneyStatus>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetMobileMoneyStatusQueryResult = NonNullable<Awaited<ReturnType<typeof getMobileMoneyStatus>>>;
export type GetMobileMoneyStatusQueryError = ErrorType<void>;
/**
 * @summary Check status of a Mobile Money transaction
 */
export declare function useGetMobileMoneyStatus<TData = Awaited<ReturnType<typeof getMobileMoneyStatus>>, TError = ErrorType<void>>(reference: string, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getMobileMoneyStatus>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getGetDonorLeaderboardUrl: () => string;
/**
 * @summary Top donors leaderboard
 */
export declare const getDonorLeaderboard: (options?: RequestInit) => Promise<LeaderboardEntry[]>;
export declare const getGetDonorLeaderboardQueryKey: () => readonly ["/api/leaderboard"];
export declare const getGetDonorLeaderboardQueryOptions: <TData = Awaited<ReturnType<typeof getDonorLeaderboard>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getDonorLeaderboard>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getDonorLeaderboard>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetDonorLeaderboardQueryResult = NonNullable<Awaited<ReturnType<typeof getDonorLeaderboard>>>;
export type GetDonorLeaderboardQueryError = ErrorType<unknown>;
/**
 * @summary Top donors leaderboard
 */
export declare function useGetDonorLeaderboard<TData = Awaited<ReturnType<typeof getDonorLeaderboard>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getDonorLeaderboard>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getListAnnouncementsUrl: () => string;
/**
 * @summary List all announcements
 */
export declare const listAnnouncements: (options?: RequestInit) => Promise<Announcement[]>;
export declare const getListAnnouncementsQueryKey: () => readonly ["/api/announcements"];
export declare const getListAnnouncementsQueryOptions: <TData = Awaited<ReturnType<typeof listAnnouncements>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listAnnouncements>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof listAnnouncements>>, TError, TData> & {
    queryKey: QueryKey;
};
export type ListAnnouncementsQueryResult = NonNullable<Awaited<ReturnType<typeof listAnnouncements>>>;
export type ListAnnouncementsQueryError = ErrorType<unknown>;
/**
 * @summary List all announcements
 */
export declare function useListAnnouncements<TData = Awaited<ReturnType<typeof listAnnouncements>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listAnnouncements>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getCreateAnnouncementUrl: () => string;
/**
 * @summary Create an announcement
 */
export declare const createAnnouncement: (announcementInput: AnnouncementInput, options?: RequestInit) => Promise<Announcement>;
export declare const getCreateAnnouncementMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createAnnouncement>>, TError, {
        data: BodyType<AnnouncementInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof createAnnouncement>>, TError, {
    data: BodyType<AnnouncementInput>;
}, TContext>;
export type CreateAnnouncementMutationResult = NonNullable<Awaited<ReturnType<typeof createAnnouncement>>>;
export type CreateAnnouncementMutationBody = BodyType<AnnouncementInput>;
export type CreateAnnouncementMutationError = ErrorType<unknown>;
/**
* @summary Create an announcement
*/
export declare const useCreateAnnouncement: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createAnnouncement>>, TError, {
        data: BodyType<AnnouncementInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof createAnnouncement>>, TError, {
    data: BodyType<AnnouncementInput>;
}, TContext>;
export declare const getGetAnnouncementUrl: (id: number) => string;
/**
 * @summary Get an announcement by ID
 */
export declare const getAnnouncement: (id: number, options?: RequestInit) => Promise<Announcement>;
export declare const getGetAnnouncementQueryKey: (id: number) => readonly [`/api/announcements/${number}`];
export declare const getGetAnnouncementQueryOptions: <TData = Awaited<ReturnType<typeof getAnnouncement>>, TError = ErrorType<void>>(id: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getAnnouncement>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getAnnouncement>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetAnnouncementQueryResult = NonNullable<Awaited<ReturnType<typeof getAnnouncement>>>;
export type GetAnnouncementQueryError = ErrorType<void>;
/**
 * @summary Get an announcement by ID
 */
export declare function useGetAnnouncement<TData = Awaited<ReturnType<typeof getAnnouncement>>, TError = ErrorType<void>>(id: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getAnnouncement>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getUpdateAnnouncementUrl: (id: number) => string;
/**
 * @summary Update an announcement
 */
export declare const updateAnnouncement: (id: number, announcementUpdate: AnnouncementUpdate, options?: RequestInit) => Promise<Announcement>;
export declare const getUpdateAnnouncementMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateAnnouncement>>, TError, {
        id: number;
        data: BodyType<AnnouncementUpdate>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof updateAnnouncement>>, TError, {
    id: number;
    data: BodyType<AnnouncementUpdate>;
}, TContext>;
export type UpdateAnnouncementMutationResult = NonNullable<Awaited<ReturnType<typeof updateAnnouncement>>>;
export type UpdateAnnouncementMutationBody = BodyType<AnnouncementUpdate>;
export type UpdateAnnouncementMutationError = ErrorType<unknown>;
/**
* @summary Update an announcement
*/
export declare const useUpdateAnnouncement: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateAnnouncement>>, TError, {
        id: number;
        data: BodyType<AnnouncementUpdate>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof updateAnnouncement>>, TError, {
    id: number;
    data: BodyType<AnnouncementUpdate>;
}, TContext>;
export declare const getDeleteAnnouncementUrl: (id: number) => string;
/**
 * @summary Delete an announcement
 */
export declare const deleteAnnouncement: (id: number, options?: RequestInit) => Promise<void>;
export declare const getDeleteAnnouncementMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof deleteAnnouncement>>, TError, {
        id: number;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof deleteAnnouncement>>, TError, {
    id: number;
}, TContext>;
export type DeleteAnnouncementMutationResult = NonNullable<Awaited<ReturnType<typeof deleteAnnouncement>>>;
export type DeleteAnnouncementMutationError = ErrorType<unknown>;
/**
* @summary Delete an announcement
*/
export declare const useDeleteAnnouncement: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof deleteAnnouncement>>, TError, {
        id: number;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof deleteAnnouncement>>, TError, {
    id: number;
}, TContext>;
export declare const getListContactMessagesUrl: () => string;
/**
 * @summary List all contact messages
 */
export declare const listContactMessages: (options?: RequestInit) => Promise<ContactMessage[]>;
export declare const getListContactMessagesQueryKey: () => readonly ["/api/contact"];
export declare const getListContactMessagesQueryOptions: <TData = Awaited<ReturnType<typeof listContactMessages>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listContactMessages>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof listContactMessages>>, TError, TData> & {
    queryKey: QueryKey;
};
export type ListContactMessagesQueryResult = NonNullable<Awaited<ReturnType<typeof listContactMessages>>>;
export type ListContactMessagesQueryError = ErrorType<unknown>;
/**
 * @summary List all contact messages
 */
export declare function useListContactMessages<TData = Awaited<ReturnType<typeof listContactMessages>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listContactMessages>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getCreateContactMessageUrl: () => string;
/**
 * @summary Submit a contact message
 */
export declare const createContactMessage: (contactMessageInput: ContactMessageInput, options?: RequestInit) => Promise<ContactMessage>;
export declare const getCreateContactMessageMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createContactMessage>>, TError, {
        data: BodyType<ContactMessageInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof createContactMessage>>, TError, {
    data: BodyType<ContactMessageInput>;
}, TContext>;
export type CreateContactMessageMutationResult = NonNullable<Awaited<ReturnType<typeof createContactMessage>>>;
export type CreateContactMessageMutationBody = BodyType<ContactMessageInput>;
export type CreateContactMessageMutationError = ErrorType<unknown>;
/**
* @summary Submit a contact message
*/
export declare const useCreateContactMessage: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createContactMessage>>, TError, {
        data: BodyType<ContactMessageInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof createContactMessage>>, TError, {
    data: BodyType<ContactMessageInput>;
}, TContext>;
export declare const getUpdateContactMessageUrl: (id: number) => string;
/**
 * @summary Mark message as read/unread
 */
export declare const updateContactMessage: (id: number, contactMessageUpdate: ContactMessageUpdate, options?: RequestInit) => Promise<ContactMessage>;
export declare const getUpdateContactMessageMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateContactMessage>>, TError, {
        id: number;
        data: BodyType<ContactMessageUpdate>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof updateContactMessage>>, TError, {
    id: number;
    data: BodyType<ContactMessageUpdate>;
}, TContext>;
export type UpdateContactMessageMutationResult = NonNullable<Awaited<ReturnType<typeof updateContactMessage>>>;
export type UpdateContactMessageMutationBody = BodyType<ContactMessageUpdate>;
export type UpdateContactMessageMutationError = ErrorType<unknown>;
/**
* @summary Mark message as read/unread
*/
export declare const useUpdateContactMessage: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateContactMessage>>, TError, {
        id: number;
        data: BodyType<ContactMessageUpdate>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof updateContactMessage>>, TError, {
    id: number;
    data: BodyType<ContactMessageUpdate>;
}, TContext>;
export declare const getDeleteContactMessageUrl: (id: number) => string;
/**
 * @summary Delete a contact message
 */
export declare const deleteContactMessage: (id: number, options?: RequestInit) => Promise<void>;
export declare const getDeleteContactMessageMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof deleteContactMessage>>, TError, {
        id: number;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof deleteContactMessage>>, TError, {
    id: number;
}, TContext>;
export type DeleteContactMessageMutationResult = NonNullable<Awaited<ReturnType<typeof deleteContactMessage>>>;
export type DeleteContactMessageMutationError = ErrorType<unknown>;
/**
* @summary Delete a contact message
*/
export declare const useDeleteContactMessage: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof deleteContactMessage>>, TError, {
        id: number;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof deleteContactMessage>>, TError, {
    id: number;
}, TContext>;
export declare const getListBlogPostsUrl: (params?: ListBlogPostsParams) => string;
/**
 * @summary List blog posts
 */
export declare const listBlogPosts: (params?: ListBlogPostsParams, options?: RequestInit) => Promise<BlogPost[]>;
export declare const getListBlogPostsQueryKey: (params?: ListBlogPostsParams) => readonly ["/api/blog", ...ListBlogPostsParams[]];
export declare const getListBlogPostsQueryOptions: <TData = Awaited<ReturnType<typeof listBlogPosts>>, TError = ErrorType<unknown>>(params?: ListBlogPostsParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listBlogPosts>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof listBlogPosts>>, TError, TData> & {
    queryKey: QueryKey;
};
export type ListBlogPostsQueryResult = NonNullable<Awaited<ReturnType<typeof listBlogPosts>>>;
export type ListBlogPostsQueryError = ErrorType<unknown>;
/**
 * @summary List blog posts
 */
export declare function useListBlogPosts<TData = Awaited<ReturnType<typeof listBlogPosts>>, TError = ErrorType<unknown>>(params?: ListBlogPostsParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listBlogPosts>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getCreateBlogPostUrl: () => string;
/**
 * @summary Create a blog post
 */
export declare const createBlogPost: (blogPostInput: BlogPostInput, options?: RequestInit) => Promise<BlogPost>;
export declare const getCreateBlogPostMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createBlogPost>>, TError, {
        data: BodyType<BlogPostInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof createBlogPost>>, TError, {
    data: BodyType<BlogPostInput>;
}, TContext>;
export type CreateBlogPostMutationResult = NonNullable<Awaited<ReturnType<typeof createBlogPost>>>;
export type CreateBlogPostMutationBody = BodyType<BlogPostInput>;
export type CreateBlogPostMutationError = ErrorType<unknown>;
/**
* @summary Create a blog post
*/
export declare const useCreateBlogPost: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createBlogPost>>, TError, {
        data: BodyType<BlogPostInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof createBlogPost>>, TError, {
    data: BodyType<BlogPostInput>;
}, TContext>;
export declare const getGetBlogPostUrl: (id: number) => string;
/**
 * @summary Get a blog post by ID
 */
export declare const getBlogPost: (id: number, options?: RequestInit) => Promise<BlogPost>;
export declare const getGetBlogPostQueryKey: (id: number) => readonly [`/api/blog/${number}`];
export declare const getGetBlogPostQueryOptions: <TData = Awaited<ReturnType<typeof getBlogPost>>, TError = ErrorType<void>>(id: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getBlogPost>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getBlogPost>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetBlogPostQueryResult = NonNullable<Awaited<ReturnType<typeof getBlogPost>>>;
export type GetBlogPostQueryError = ErrorType<void>;
/**
 * @summary Get a blog post by ID
 */
export declare function useGetBlogPost<TData = Awaited<ReturnType<typeof getBlogPost>>, TError = ErrorType<void>>(id: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getBlogPost>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getUpdateBlogPostUrl: (id: number) => string;
/**
 * @summary Update a blog post
 */
export declare const updateBlogPost: (id: number, blogPostUpdate: BlogPostUpdate, options?: RequestInit) => Promise<BlogPost>;
export declare const getUpdateBlogPostMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateBlogPost>>, TError, {
        id: number;
        data: BodyType<BlogPostUpdate>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof updateBlogPost>>, TError, {
    id: number;
    data: BodyType<BlogPostUpdate>;
}, TContext>;
export type UpdateBlogPostMutationResult = NonNullable<Awaited<ReturnType<typeof updateBlogPost>>>;
export type UpdateBlogPostMutationBody = BodyType<BlogPostUpdate>;
export type UpdateBlogPostMutationError = ErrorType<unknown>;
/**
* @summary Update a blog post
*/
export declare const useUpdateBlogPost: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateBlogPost>>, TError, {
        id: number;
        data: BodyType<BlogPostUpdate>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof updateBlogPost>>, TError, {
    id: number;
    data: BodyType<BlogPostUpdate>;
}, TContext>;
export declare const getDeleteBlogPostUrl: (id: number) => string;
/**
 * @summary Delete a blog post
 */
export declare const deleteBlogPost: (id: number, options?: RequestInit) => Promise<void>;
export declare const getDeleteBlogPostMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof deleteBlogPost>>, TError, {
        id: number;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof deleteBlogPost>>, TError, {
    id: number;
}, TContext>;
export type DeleteBlogPostMutationResult = NonNullable<Awaited<ReturnType<typeof deleteBlogPost>>>;
export type DeleteBlogPostMutationError = ErrorType<unknown>;
/**
* @summary Delete a blog post
*/
export declare const useDeleteBlogPost: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof deleteBlogPost>>, TError, {
        id: number;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof deleteBlogPost>>, TError, {
    id: number;
}, TContext>;
export declare const getListGalleryPhotosUrl: () => string;
/**
 * @summary List gallery photos
 */
export declare const listGalleryPhotos: (options?: RequestInit) => Promise<GalleryPhoto[]>;
export declare const getListGalleryPhotosQueryKey: () => readonly ["/api/gallery"];
export declare const getListGalleryPhotosQueryOptions: <TData = Awaited<ReturnType<typeof listGalleryPhotos>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listGalleryPhotos>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof listGalleryPhotos>>, TError, TData> & {
    queryKey: QueryKey;
};
export type ListGalleryPhotosQueryResult = NonNullable<Awaited<ReturnType<typeof listGalleryPhotos>>>;
export type ListGalleryPhotosQueryError = ErrorType<unknown>;
/**
 * @summary List gallery photos
 */
export declare function useListGalleryPhotos<TData = Awaited<ReturnType<typeof listGalleryPhotos>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listGalleryPhotos>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getCreateGalleryPhotoUrl: () => string;
/**
 * @summary Add a photo to the gallery
 */
export declare const createGalleryPhoto: (galleryPhotoInput: GalleryPhotoInput, options?: RequestInit) => Promise<GalleryPhoto>;
export declare const getCreateGalleryPhotoMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createGalleryPhoto>>, TError, {
        data: BodyType<GalleryPhotoInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof createGalleryPhoto>>, TError, {
    data: BodyType<GalleryPhotoInput>;
}, TContext>;
export type CreateGalleryPhotoMutationResult = NonNullable<Awaited<ReturnType<typeof createGalleryPhoto>>>;
export type CreateGalleryPhotoMutationBody = BodyType<GalleryPhotoInput>;
export type CreateGalleryPhotoMutationError = ErrorType<unknown>;
/**
* @summary Add a photo to the gallery
*/
export declare const useCreateGalleryPhoto: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createGalleryPhoto>>, TError, {
        data: BodyType<GalleryPhotoInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof createGalleryPhoto>>, TError, {
    data: BodyType<GalleryPhotoInput>;
}, TContext>;
export declare const getUpdateGalleryPhotoUrl: (id: number) => string;
/**
 * @summary Update a gallery photo
 */
export declare const updateGalleryPhoto: (id: number, galleryPhotoInput: GalleryPhotoInput, options?: RequestInit) => Promise<GalleryPhoto>;
export declare const getUpdateGalleryPhotoMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateGalleryPhoto>>, TError, {
        id: number;
        data: BodyType<GalleryPhotoInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof updateGalleryPhoto>>, TError, {
    id: number;
    data: BodyType<GalleryPhotoInput>;
}, TContext>;
export type UpdateGalleryPhotoMutationResult = NonNullable<Awaited<ReturnType<typeof updateGalleryPhoto>>>;
export type UpdateGalleryPhotoMutationBody = BodyType<GalleryPhotoInput>;
export type UpdateGalleryPhotoMutationError = ErrorType<unknown>;
/**
* @summary Update a gallery photo
*/
export declare const useUpdateGalleryPhoto: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateGalleryPhoto>>, TError, {
        id: number;
        data: BodyType<GalleryPhotoInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof updateGalleryPhoto>>, TError, {
    id: number;
    data: BodyType<GalleryPhotoInput>;
}, TContext>;
export declare const getDeleteGalleryPhotoUrl: (id: number) => string;
/**
 * @summary Delete a gallery photo
 */
export declare const deleteGalleryPhoto: (id: number, options?: RequestInit) => Promise<void>;
export declare const getDeleteGalleryPhotoMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof deleteGalleryPhoto>>, TError, {
        id: number;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof deleteGalleryPhoto>>, TError, {
    id: number;
}, TContext>;
export type DeleteGalleryPhotoMutationResult = NonNullable<Awaited<ReturnType<typeof deleteGalleryPhoto>>>;
export type DeleteGalleryPhotoMutationError = ErrorType<unknown>;
/**
* @summary Delete a gallery photo
*/
export declare const useDeleteGalleryPhoto: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof deleteGalleryPhoto>>, TError, {
        id: number;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof deleteGalleryPhoto>>, TError, {
    id: number;
}, TContext>;
export declare const getSubscribeNewsletterUrl: () => string;
/**
 * @summary Subscribe to newsletter
 */
export declare const subscribeNewsletter: (newsletterSubscriberInput: NewsletterSubscriberInput, options?: RequestInit) => Promise<NewsletterSubscriber>;
export declare const getSubscribeNewsletterMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof subscribeNewsletter>>, TError, {
        data: BodyType<NewsletterSubscriberInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof subscribeNewsletter>>, TError, {
    data: BodyType<NewsletterSubscriberInput>;
}, TContext>;
export type SubscribeNewsletterMutationResult = NonNullable<Awaited<ReturnType<typeof subscribeNewsletter>>>;
export type SubscribeNewsletterMutationBody = BodyType<NewsletterSubscriberInput>;
export type SubscribeNewsletterMutationError = ErrorType<unknown>;
/**
* @summary Subscribe to newsletter
*/
export declare const useSubscribeNewsletter: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof subscribeNewsletter>>, TError, {
        data: BodyType<NewsletterSubscriberInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof subscribeNewsletter>>, TError, {
    data: BodyType<NewsletterSubscriberInput>;
}, TContext>;
export declare const getListNewsletterSubscribersUrl: () => string;
/**
 * @summary List newsletter subscribers
 */
export declare const listNewsletterSubscribers: (options?: RequestInit) => Promise<NewsletterSubscriber[]>;
export declare const getListNewsletterSubscribersQueryKey: () => readonly ["/api/newsletter/subscribers"];
export declare const getListNewsletterSubscribersQueryOptions: <TData = Awaited<ReturnType<typeof listNewsletterSubscribers>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listNewsletterSubscribers>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof listNewsletterSubscribers>>, TError, TData> & {
    queryKey: QueryKey;
};
export type ListNewsletterSubscribersQueryResult = NonNullable<Awaited<ReturnType<typeof listNewsletterSubscribers>>>;
export type ListNewsletterSubscribersQueryError = ErrorType<unknown>;
/**
 * @summary List newsletter subscribers
 */
export declare function useListNewsletterSubscribers<TData = Awaited<ReturnType<typeof listNewsletterSubscribers>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listNewsletterSubscribers>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getDeleteNewsletterSubscriberUrl: (id: number) => string;
/**
 * @summary Remove a subscriber
 */
export declare const deleteNewsletterSubscriber: (id: number, options?: RequestInit) => Promise<void>;
export declare const getDeleteNewsletterSubscriberMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof deleteNewsletterSubscriber>>, TError, {
        id: number;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof deleteNewsletterSubscriber>>, TError, {
    id: number;
}, TContext>;
export type DeleteNewsletterSubscriberMutationResult = NonNullable<Awaited<ReturnType<typeof deleteNewsletterSubscriber>>>;
export type DeleteNewsletterSubscriberMutationError = ErrorType<unknown>;
/**
* @summary Remove a subscriber
*/
export declare const useDeleteNewsletterSubscriber: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof deleteNewsletterSubscriber>>, TError, {
        id: number;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof deleteNewsletterSubscriber>>, TError, {
    id: number;
}, TContext>;
export declare const getListEventVolunteersUrl: (id: number) => string;
/**
 * @summary List volunteers assigned to an event
 */
export declare const listEventVolunteers: (id: number, options?: RequestInit) => Promise<VolunteerAssignment[]>;
export declare const getListEventVolunteersQueryKey: (id: number) => readonly [`/api/events/${number}/volunteers`];
export declare const getListEventVolunteersQueryOptions: <TData = Awaited<ReturnType<typeof listEventVolunteers>>, TError = ErrorType<unknown>>(id: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listEventVolunteers>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof listEventVolunteers>>, TError, TData> & {
    queryKey: QueryKey;
};
export type ListEventVolunteersQueryResult = NonNullable<Awaited<ReturnType<typeof listEventVolunteers>>>;
export type ListEventVolunteersQueryError = ErrorType<unknown>;
/**
 * @summary List volunteers assigned to an event
 */
export declare function useListEventVolunteers<TData = Awaited<ReturnType<typeof listEventVolunteers>>, TError = ErrorType<unknown>>(id: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listEventVolunteers>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getAssignVolunteerToEventUrl: (id: number) => string;
/**
 * @summary Assign a volunteer to an event
 */
export declare const assignVolunteerToEvent: (id: number, volunteerAssignmentInput: VolunteerAssignmentInput, options?: RequestInit) => Promise<VolunteerAssignment>;
export declare const getAssignVolunteerToEventMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof assignVolunteerToEvent>>, TError, {
        id: number;
        data: BodyType<VolunteerAssignmentInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof assignVolunteerToEvent>>, TError, {
    id: number;
    data: BodyType<VolunteerAssignmentInput>;
}, TContext>;
export type AssignVolunteerToEventMutationResult = NonNullable<Awaited<ReturnType<typeof assignVolunteerToEvent>>>;
export type AssignVolunteerToEventMutationBody = BodyType<VolunteerAssignmentInput>;
export type AssignVolunteerToEventMutationError = ErrorType<unknown>;
/**
* @summary Assign a volunteer to an event
*/
export declare const useAssignVolunteerToEvent: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof assignVolunteerToEvent>>, TError, {
        id: number;
        data: BodyType<VolunteerAssignmentInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof assignVolunteerToEvent>>, TError, {
    id: number;
    data: BodyType<VolunteerAssignmentInput>;
}, TContext>;
export declare const getRemoveVolunteerFromEventUrl: (id: number, volunteerId: number) => string;
/**
 * @summary Remove a volunteer from an event
 */
export declare const removeVolunteerFromEvent: (id: number, volunteerId: number, options?: RequestInit) => Promise<void>;
export declare const getRemoveVolunteerFromEventMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof removeVolunteerFromEvent>>, TError, {
        id: number;
        volunteerId: number;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof removeVolunteerFromEvent>>, TError, {
    id: number;
    volunteerId: number;
}, TContext>;
export type RemoveVolunteerFromEventMutationResult = NonNullable<Awaited<ReturnType<typeof removeVolunteerFromEvent>>>;
export type RemoveVolunteerFromEventMutationError = ErrorType<unknown>;
/**
* @summary Remove a volunteer from an event
*/
export declare const useRemoveVolunteerFromEvent: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof removeVolunteerFromEvent>>, TError, {
        id: number;
        volunteerId: number;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof removeVolunteerFromEvent>>, TError, {
    id: number;
    volunteerId: number;
}, TContext>;
export declare const getListJobsUrl: (params?: ListJobsParams) => string;
/**
 * @summary List published jobs (public)
 */
export declare const listJobs: (params?: ListJobsParams, options?: RequestInit) => Promise<Job[]>;
export declare const getListJobsQueryKey: (params?: ListJobsParams) => readonly ["/api/jobs", ...ListJobsParams[]];
export declare const getListJobsQueryOptions: <TData = Awaited<ReturnType<typeof listJobs>>, TError = ErrorType<unknown>>(params?: ListJobsParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listJobs>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof listJobs>>, TError, TData> & {
    queryKey: QueryKey;
};
export type ListJobsQueryResult = NonNullable<Awaited<ReturnType<typeof listJobs>>>;
export type ListJobsQueryError = ErrorType<unknown>;
/**
 * @summary List published jobs (public)
 */
export declare function useListJobs<TData = Awaited<ReturnType<typeof listJobs>>, TError = ErrorType<unknown>>(params?: ListJobsParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listJobs>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getCreateJobUrl: () => string;
/**
 * @summary Post a new job (authenticated)
 */
export declare const createJob: (jobInput: JobInput, options?: RequestInit) => Promise<Job>;
export declare const getCreateJobMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createJob>>, TError, {
        data: BodyType<JobInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof createJob>>, TError, {
    data: BodyType<JobInput>;
}, TContext>;
export type CreateJobMutationResult = NonNullable<Awaited<ReturnType<typeof createJob>>>;
export type CreateJobMutationBody = BodyType<JobInput>;
export type CreateJobMutationError = ErrorType<unknown>;
/**
* @summary Post a new job (authenticated)
*/
export declare const useCreateJob: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createJob>>, TError, {
        data: BodyType<JobInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof createJob>>, TError, {
    data: BodyType<JobInput>;
}, TContext>;
export declare const getListExternalJobsUrl: (params?: ListExternalJobsParams) => string;
/**
 * @summary Live jobs from ReliefWeb (public)
 */
export declare const listExternalJobs: (params?: ListExternalJobsParams, options?: RequestInit) => Promise<ExternalJob[]>;
export declare const getListExternalJobsQueryKey: (params?: ListExternalJobsParams) => readonly ["/api/jobs/feed", ...ListExternalJobsParams[]];
export declare const getListExternalJobsQueryOptions: <TData = Awaited<ReturnType<typeof listExternalJobs>>, TError = ErrorType<unknown>>(params?: ListExternalJobsParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listExternalJobs>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof listExternalJobs>>, TError, TData> & {
    queryKey: QueryKey;
};
export type ListExternalJobsQueryResult = NonNullable<Awaited<ReturnType<typeof listExternalJobs>>>;
export type ListExternalJobsQueryError = ErrorType<unknown>;
/**
 * @summary Live jobs from ReliefWeb (public)
 */
export declare function useListExternalJobs<TData = Awaited<ReturnType<typeof listExternalJobs>>, TError = ErrorType<unknown>>(params?: ListExternalJobsParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listExternalJobs>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getGetJobUrl: (id: number) => string;
/**
 * @summary Get a single job
 */
export declare const getJob: (id: number, options?: RequestInit) => Promise<Job>;
export declare const getGetJobQueryKey: (id: number) => readonly [`/api/jobs/${number}`];
export declare const getGetJobQueryOptions: <TData = Awaited<ReturnType<typeof getJob>>, TError = ErrorType<unknown>>(id: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getJob>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getJob>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetJobQueryResult = NonNullable<Awaited<ReturnType<typeof getJob>>>;
export type GetJobQueryError = ErrorType<unknown>;
/**
 * @summary Get a single job
 */
export declare function useGetJob<TData = Awaited<ReturnType<typeof getJob>>, TError = ErrorType<unknown>>(id: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getJob>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getUpdateJobUrl: (id: number) => string;
/**
 * @summary Update a job (admin)
 */
export declare const updateJob: (id: number, jobUpdate: JobUpdate, options?: RequestInit) => Promise<Job>;
export declare const getUpdateJobMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateJob>>, TError, {
        id: number;
        data: BodyType<JobUpdate>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof updateJob>>, TError, {
    id: number;
    data: BodyType<JobUpdate>;
}, TContext>;
export type UpdateJobMutationResult = NonNullable<Awaited<ReturnType<typeof updateJob>>>;
export type UpdateJobMutationBody = BodyType<JobUpdate>;
export type UpdateJobMutationError = ErrorType<unknown>;
/**
* @summary Update a job (admin)
*/
export declare const useUpdateJob: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateJob>>, TError, {
        id: number;
        data: BodyType<JobUpdate>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof updateJob>>, TError, {
    id: number;
    data: BodyType<JobUpdate>;
}, TContext>;
export declare const getDeleteJobUrl: (id: number) => string;
/**
 * @summary Delete a job (admin)
 */
export declare const deleteJob: (id: number, options?: RequestInit) => Promise<void>;
export declare const getDeleteJobMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof deleteJob>>, TError, {
        id: number;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof deleteJob>>, TError, {
    id: number;
}, TContext>;
export type DeleteJobMutationResult = NonNullable<Awaited<ReturnType<typeof deleteJob>>>;
export type DeleteJobMutationError = ErrorType<unknown>;
/**
* @summary Delete a job (admin)
*/
export declare const useDeleteJob: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof deleteJob>>, TError, {
        id: number;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof deleteJob>>, TError, {
    id: number;
}, TContext>;
export declare const getApplyToJobUrl: (id: number) => string;
/**
 * @summary Apply to a job (authenticated)
 */
export declare const applyToJob: (id: number, jobApplicationInput: JobApplicationInput, options?: RequestInit) => Promise<JobApplication>;
export declare const getApplyToJobMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof applyToJob>>, TError, {
        id: number;
        data: BodyType<JobApplicationInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof applyToJob>>, TError, {
    id: number;
    data: BodyType<JobApplicationInput>;
}, TContext>;
export type ApplyToJobMutationResult = NonNullable<Awaited<ReturnType<typeof applyToJob>>>;
export type ApplyToJobMutationBody = BodyType<JobApplicationInput>;
export type ApplyToJobMutationError = ErrorType<unknown>;
/**
* @summary Apply to a job (authenticated)
*/
export declare const useApplyToJob: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof applyToJob>>, TError, {
        id: number;
        data: BodyType<JobApplicationInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof applyToJob>>, TError, {
    id: number;
    data: BodyType<JobApplicationInput>;
}, TContext>;
export declare const getListJobApplicationsUrl: (params?: ListJobApplicationsParams) => string;
/**
 * @summary List all applications (admin)
 */
export declare const listJobApplications: (params?: ListJobApplicationsParams, options?: RequestInit) => Promise<JobApplication[]>;
export declare const getListJobApplicationsQueryKey: (params?: ListJobApplicationsParams) => readonly ["/api/job-applications", ...ListJobApplicationsParams[]];
export declare const getListJobApplicationsQueryOptions: <TData = Awaited<ReturnType<typeof listJobApplications>>, TError = ErrorType<unknown>>(params?: ListJobApplicationsParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listJobApplications>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof listJobApplications>>, TError, TData> & {
    queryKey: QueryKey;
};
export type ListJobApplicationsQueryResult = NonNullable<Awaited<ReturnType<typeof listJobApplications>>>;
export type ListJobApplicationsQueryError = ErrorType<unknown>;
/**
 * @summary List all applications (admin)
 */
export declare function useListJobApplications<TData = Awaited<ReturnType<typeof listJobApplications>>, TError = ErrorType<unknown>>(params?: ListJobApplicationsParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listJobApplications>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getUpdateJobApplicationUrl: (id: number) => string;
/**
 * @summary Update application status (admin)
 */
export declare const updateJobApplication: (id: number, jobApplicationUpdate: JobApplicationUpdate, options?: RequestInit) => Promise<JobApplication>;
export declare const getUpdateJobApplicationMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateJobApplication>>, TError, {
        id: number;
        data: BodyType<JobApplicationUpdate>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof updateJobApplication>>, TError, {
    id: number;
    data: BodyType<JobApplicationUpdate>;
}, TContext>;
export type UpdateJobApplicationMutationResult = NonNullable<Awaited<ReturnType<typeof updateJobApplication>>>;
export type UpdateJobApplicationMutationBody = BodyType<JobApplicationUpdate>;
export type UpdateJobApplicationMutationError = ErrorType<unknown>;
/**
* @summary Update application status (admin)
*/
export declare const useUpdateJobApplication: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateJobApplication>>, TError, {
        id: number;
        data: BodyType<JobApplicationUpdate>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof updateJobApplication>>, TError, {
    id: number;
    data: BodyType<JobApplicationUpdate>;
}, TContext>;
export declare const getListLoanRequestsUrl: () => string;
/**
 * @summary List all loan requests (admin)
 */
export declare const listLoanRequests: (options?: RequestInit) => Promise<LoanRequest[]>;
export declare const getListLoanRequestsQueryKey: () => readonly ["/api/loan-requests"];
export declare const getListLoanRequestsQueryOptions: <TData = Awaited<ReturnType<typeof listLoanRequests>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listLoanRequests>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof listLoanRequests>>, TError, TData> & {
    queryKey: QueryKey;
};
export type ListLoanRequestsQueryResult = NonNullable<Awaited<ReturnType<typeof listLoanRequests>>>;
export type ListLoanRequestsQueryError = ErrorType<unknown>;
/**
 * @summary List all loan requests (admin)
 */
export declare function useListLoanRequests<TData = Awaited<ReturnType<typeof listLoanRequests>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listLoanRequests>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getCreateLoanRequestUrl: () => string;
/**
 * @summary Submit a loan request (authenticated member)
 */
export declare const createLoanRequest: (loanRequestInput: LoanRequestInput, options?: RequestInit) => Promise<LoanRequest>;
export declare const getCreateLoanRequestMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createLoanRequest>>, TError, {
        data: BodyType<LoanRequestInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof createLoanRequest>>, TError, {
    data: BodyType<LoanRequestInput>;
}, TContext>;
export type CreateLoanRequestMutationResult = NonNullable<Awaited<ReturnType<typeof createLoanRequest>>>;
export type CreateLoanRequestMutationBody = BodyType<LoanRequestInput>;
export type CreateLoanRequestMutationError = ErrorType<unknown>;
/**
* @summary Submit a loan request (authenticated member)
*/
export declare const useCreateLoanRequest: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createLoanRequest>>, TError, {
        data: BodyType<LoanRequestInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof createLoanRequest>>, TError, {
    data: BodyType<LoanRequestInput>;
}, TContext>;
export declare const getGetLoanRequestUrl: (id: number) => string;
/**
 * @summary Get a single loan request (admin)
 */
export declare const getLoanRequest: (id: number, options?: RequestInit) => Promise<LoanRequest>;
export declare const getGetLoanRequestQueryKey: (id: number) => readonly [`/api/loan-requests/${number}`];
export declare const getGetLoanRequestQueryOptions: <TData = Awaited<ReturnType<typeof getLoanRequest>>, TError = ErrorType<unknown>>(id: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getLoanRequest>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getLoanRequest>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetLoanRequestQueryResult = NonNullable<Awaited<ReturnType<typeof getLoanRequest>>>;
export type GetLoanRequestQueryError = ErrorType<unknown>;
/**
 * @summary Get a single loan request (admin)
 */
export declare function useGetLoanRequest<TData = Awaited<ReturnType<typeof getLoanRequest>>, TError = ErrorType<unknown>>(id: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getLoanRequest>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getUpdateLoanRequestUrl: (id: number) => string;
/**
 * @summary Approve, reject, or edit a loan request (admin)
 */
export declare const updateLoanRequest: (id: number, loanRequestUpdate: LoanRequestUpdate, options?: RequestInit) => Promise<LoanRequest>;
export declare const getUpdateLoanRequestMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateLoanRequest>>, TError, {
        id: number;
        data: BodyType<LoanRequestUpdate>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof updateLoanRequest>>, TError, {
    id: number;
    data: BodyType<LoanRequestUpdate>;
}, TContext>;
export type UpdateLoanRequestMutationResult = NonNullable<Awaited<ReturnType<typeof updateLoanRequest>>>;
export type UpdateLoanRequestMutationBody = BodyType<LoanRequestUpdate>;
export type UpdateLoanRequestMutationError = ErrorType<unknown>;
/**
* @summary Approve, reject, or edit a loan request (admin)
*/
export declare const useUpdateLoanRequest: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateLoanRequest>>, TError, {
        id: number;
        data: BodyType<LoanRequestUpdate>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof updateLoanRequest>>, TError, {
    id: number;
    data: BodyType<LoanRequestUpdate>;
}, TContext>;
export declare const getGetDashboardStatsUrl: () => string;
/**
 * @summary Get platform overview statistics
 */
export declare const getDashboardStats: (options?: RequestInit) => Promise<DashboardStats>;
export declare const getGetDashboardStatsQueryKey: () => readonly ["/api/dashboard/stats"];
export declare const getGetDashboardStatsQueryOptions: <TData = Awaited<ReturnType<typeof getDashboardStats>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getDashboardStats>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getDashboardStats>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetDashboardStatsQueryResult = NonNullable<Awaited<ReturnType<typeof getDashboardStats>>>;
export type GetDashboardStatsQueryError = ErrorType<unknown>;
/**
 * @summary Get platform overview statistics
 */
export declare function useGetDashboardStats<TData = Awaited<ReturnType<typeof getDashboardStats>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getDashboardStats>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getGetPublicStatsUrl: () => string;
/**
 * @summary Public non-sensitive platform counts (no auth, no financials)
 */
export declare const getPublicStats: (options?: RequestInit) => Promise<PublicStats>;
export declare const getGetPublicStatsQueryKey: () => readonly ["/api/public-stats"];
export declare const getGetPublicStatsQueryOptions: <TData = Awaited<ReturnType<typeof getPublicStats>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getPublicStats>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getPublicStats>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetPublicStatsQueryResult = NonNullable<Awaited<ReturnType<typeof getPublicStats>>>;
export type GetPublicStatsQueryError = ErrorType<unknown>;
/**
 * @summary Public non-sensitive platform counts (no auth, no financials)
 */
export declare function useGetPublicStats<TData = Awaited<ReturnType<typeof getPublicStats>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getPublicStats>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getListFundraisingProjectsUrl: () => string;
/**
 * @summary List active fundraising projects (public)
 */
export declare const listFundraisingProjects: (options?: RequestInit) => Promise<FundraisingProject[]>;
export declare const getListFundraisingProjectsQueryKey: () => readonly ["/api/fundraising-projects"];
export declare const getListFundraisingProjectsQueryOptions: <TData = Awaited<ReturnType<typeof listFundraisingProjects>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listFundraisingProjects>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof listFundraisingProjects>>, TError, TData> & {
    queryKey: QueryKey;
};
export type ListFundraisingProjectsQueryResult = NonNullable<Awaited<ReturnType<typeof listFundraisingProjects>>>;
export type ListFundraisingProjectsQueryError = ErrorType<unknown>;
/**
 * @summary List active fundraising projects (public)
 */
export declare function useListFundraisingProjects<TData = Awaited<ReturnType<typeof listFundraisingProjects>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listFundraisingProjects>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getCreateFundraisingProjectUrl: () => string;
/**
 * @summary Create a fundraising project (admin)
 */
export declare const createFundraisingProject: (fundraisingProjectInput: FundraisingProjectInput, options?: RequestInit) => Promise<FundraisingProject>;
export declare const getCreateFundraisingProjectMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createFundraisingProject>>, TError, {
        data: BodyType<FundraisingProjectInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof createFundraisingProject>>, TError, {
    data: BodyType<FundraisingProjectInput>;
}, TContext>;
export type CreateFundraisingProjectMutationResult = NonNullable<Awaited<ReturnType<typeof createFundraisingProject>>>;
export type CreateFundraisingProjectMutationBody = BodyType<FundraisingProjectInput>;
export type CreateFundraisingProjectMutationError = ErrorType<unknown>;
/**
* @summary Create a fundraising project (admin)
*/
export declare const useCreateFundraisingProject: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createFundraisingProject>>, TError, {
        data: BodyType<FundraisingProjectInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof createFundraisingProject>>, TError, {
    data: BodyType<FundraisingProjectInput>;
}, TContext>;
export declare const getGetFundraisingProjectUrl: (id: number) => string;
/**
 * @summary Get a single fundraising project
 */
export declare const getFundraisingProject: (id: number, options?: RequestInit) => Promise<FundraisingProject>;
export declare const getGetFundraisingProjectQueryKey: (id: number) => readonly [`/api/fundraising-projects/${number}`];
export declare const getGetFundraisingProjectQueryOptions: <TData = Awaited<ReturnType<typeof getFundraisingProject>>, TError = ErrorType<void>>(id: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getFundraisingProject>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getFundraisingProject>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetFundraisingProjectQueryResult = NonNullable<Awaited<ReturnType<typeof getFundraisingProject>>>;
export type GetFundraisingProjectQueryError = ErrorType<void>;
/**
 * @summary Get a single fundraising project
 */
export declare function useGetFundraisingProject<TData = Awaited<ReturnType<typeof getFundraisingProject>>, TError = ErrorType<void>>(id: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getFundraisingProject>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getUpdateFundraisingProjectUrl: (id: number) => string;
/**
 * @summary Update a fundraising project (admin)
 */
export declare const updateFundraisingProject: (id: number, fundraisingProjectUpdate: FundraisingProjectUpdate, options?: RequestInit) => Promise<FundraisingProject>;
export declare const getUpdateFundraisingProjectMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateFundraisingProject>>, TError, {
        id: number;
        data: BodyType<FundraisingProjectUpdate>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof updateFundraisingProject>>, TError, {
    id: number;
    data: BodyType<FundraisingProjectUpdate>;
}, TContext>;
export type UpdateFundraisingProjectMutationResult = NonNullable<Awaited<ReturnType<typeof updateFundraisingProject>>>;
export type UpdateFundraisingProjectMutationBody = BodyType<FundraisingProjectUpdate>;
export type UpdateFundraisingProjectMutationError = ErrorType<unknown>;
/**
* @summary Update a fundraising project (admin)
*/
export declare const useUpdateFundraisingProject: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateFundraisingProject>>, TError, {
        id: number;
        data: BodyType<FundraisingProjectUpdate>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof updateFundraisingProject>>, TError, {
    id: number;
    data: BodyType<FundraisingProjectUpdate>;
}, TContext>;
export declare const getDeleteFundraisingProjectUrl: (id: number) => string;
/**
 * @summary Delete a fundraising project (admin)
 */
export declare const deleteFundraisingProject: (id: number, options?: RequestInit) => Promise<void>;
export declare const getDeleteFundraisingProjectMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof deleteFundraisingProject>>, TError, {
        id: number;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof deleteFundraisingProject>>, TError, {
    id: number;
}, TContext>;
export type DeleteFundraisingProjectMutationResult = NonNullable<Awaited<ReturnType<typeof deleteFundraisingProject>>>;
export type DeleteFundraisingProjectMutationError = ErrorType<unknown>;
/**
* @summary Delete a fundraising project (admin)
*/
export declare const useDeleteFundraisingProject: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof deleteFundraisingProject>>, TError, {
        id: number;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof deleteFundraisingProject>>, TError, {
    id: number;
}, TContext>;
export {};
//# sourceMappingURL=api.d.ts.map